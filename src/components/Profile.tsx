import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Avatar from 'src/components/Avatar';
import PostGridItem from 'src/components/PostGridItem';
import usePosts from 'src/hooks/usePosts';
import {getUser} from '../lib/users';

function Profile({userId}) {
  const {posts, noMorePost, refreshing, onLoadMore, onRefresh} =
    usePosts(userId);

  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(userId, 'user id');
    console.log(posts, 'posts');
    getUser(userId).then(setUser);
  }, [userId]);

  if (!user || !posts) {
    return (
      <ActivityIndicator style={styles.spinner} size={32} color="#6200ee" />
    );
  }

  const renderItem = ({item}) => <PostGridItem post={item} />;

  return (
    <FlatList
      style={styles.block}
      data={posts}
      renderItem={renderItem}
      numColumns={3}
      keyExtractor={item => item.id}
      ListHeaderComponent={
        <View style={styles.userInfo}>
          <Avatar source={user.photoURL && {uri: user.photoURL}} size={128} />
          <Text style={styles.username}>{user.displayName}</Text>
        </View>
      }
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.25}
      ListFooterComponent={
        !noMorePost && (
          <ActivityIndicator
            style={styles.bottomSpinner}
            size={32}
            color="#6200ee"
          />
        )
      }
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    />
  );
}

const styles = StyleSheet.create({
  bottomSpinner: {
    height: 128,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
  },
  block: {
    flex: 1,
  },
  userInfo: {
    paddingTop: 80,
    paddingBottom: 64,
    alignItems: 'center',
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },
  username: {
    marginTop: 8,
    fontSize: 24,
    color: '#424242',
  },
});

export default Profile;
