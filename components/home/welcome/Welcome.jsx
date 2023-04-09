import React, {useState} from 'react'
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants'

const Welcome = () => {
  const router = useRouter();
  const [search, setSearch] = useState('')
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Worker', 'Servant']
  const [activeJobType, setActiveJobType] = useState('Full-time');
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Abdulroheem</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder='Search for jobs...'
            value={search}
            onChange={() => {}}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
          source={icons.search} 
          resizeMode='contain'
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity 
            style={styles.tab(activeJobType, item)} 
            onPress={() => { 
              setActiveJobType(item)
              router.push(`/search/${item}`)
            }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome