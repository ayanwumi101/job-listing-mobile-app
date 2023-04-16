import React, {useState, useCallback, } from 'react'
import { Text, View, SafeAreaView, Image, ScrollView, ActivityIndicator, RefreshControl, SafeAreaViewComponent } from 'react-native'
import { Company, Specifics, JobAbout, JobFooter, ScreenHeaderBtn, JobTabs } from '../../components'
import useFetch from '../../hook/useFetch'
import { COLORS, icons, images, SIZES } from '../../constants';
import { useSearchParams, useRouter, Stack } from 'expo-router'

const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter();
    const [refreshing, setRefreshing] = useState(false)

    const {data, isLoading, error, refetch} = useFetch('job-details', {job_id: params.id})

    const onRefresh = () => {}
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimesion="60%"
              onPress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimesion="60%"
              onPress={() => router.back()}
            />
          ),
          headerTitle: () => (<Text style={{ fontSize: 20, fontFamily: "DMBold" }}>Job Details</Text>),
          headerTitleAlign: "center",
        }}
      />
      <>
        <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
          {isLoading ? (<ActivityIndicator size='large' color={COLORS.primary} />) 
          : error ? (<Text>Something went wrong</Text>)
          : data.length === 0 ? (<Text>No data</Text>)
          : (
            <View style={{padding: SIZES.medium, paddingBottom: 100}}>
              <Company 
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />
              <JobTabs />
            </View>
            )
          }
        </ScrollView>
      </>
    </SafeAreaView>
  );
}

export default JobDetails