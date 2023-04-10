import React, {useState, useCallback, } from 'react'
import { Text, View, SafeAreaView, Image, ScrollView, ActivityIndicator, RefreshControl, SafeAreaViewComponent } from 'react-native'
import { Company, Specifics, JobAbout, JobFooter, ScreenHeaderBtn, JobTabs } from '../../components'
import useFetch from '../../hook/useFetch'
import { COLORS, icons, images, SIZES } from "../../constants";
import { useSearchParams, useRouter, Stack } from 'expo-router'

const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter();

    const {data, isLoading, error, refetch} = useFetch('job-details', {job_id: params.id})
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimesion="60%"
              onPress={() => router.back( )}
            />
          ),
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimesion="60%"
              onPress={() => router.back()}
            />
          ),
          headerTitleAlign: "center",
          headerTitle: () => (
            <Text style={{ fontSize: 18, fontFamily: "DMBold" }}>
              Job Details
            </Text>
          ),
          headerTitleAlign: "center",
        }}
      />
    </SafeAreaView>
  );
}

export default JobDetails