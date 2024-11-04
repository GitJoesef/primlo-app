import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { BookingIcon, ExploreIcon, HomeIcon, InActiveBookingIcon, InActiveExploreIcon, InActiveHomeIcon, InActiveProfileIcon, ProfileIcon } from '@/assets/images';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => focused ? <HomeIcon /> : <InActiveHomeIcon />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Reservations',
          tabBarIcon: ({ color, focused }) => focused ? <BookingIcon /> : <InActiveBookingIcon />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Appointments',
          tabBarIcon: ({ color, focused }) => focused ? <ExploreIcon /> : <InActiveExploreIcon />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => focused ? <ProfileIcon /> : <InActiveProfileIcon />,
        }}
      />
    </Tabs>
  );
}
