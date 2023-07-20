import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import { Apod } from "../types";
import { Link } from "expo-router";

type ApodListItemProps = {
  apod: Apod;
  onImagePress?: () => void;
};

const ApodListItem = ({ apod, onImagePress = () => {} }: ApodListItemProps) => {
  const { title, copyright, url, date } = apod;

  return (
    <View style={styles.item}>
      <Link href={`/apod/${date}`} asChild>
        <Pressable style={styles.content}>
          <Text style={styles.title}>{title}</Text>
        </Pressable>
      </Link>
      <Pressable onPress={onImagePress}>
        <Image source={{ uri: url }} style={styles.image} />
      </Pressable>
      <Text style={styles.date}>{date}</Text>
      {copyright && (
        <Text style={styles.copyright}>
          © {copyright?.trim()?.replaceAll("\n", "")}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    elevation: 4,
    marginBottom: 16,
    overflow: "hidden",
    maxWidth: 500,
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 8,
    marginVertical: 3,
  },
  date: {
    position: "absolute",
    top: 33,
    right: 12,
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "black",
    padding: 3,
    borderRadius: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 8,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWith: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  copyright: {
    color: "gray",
    textAlign: "right",
    fontSize: 12,
    marginVertical: 3,
  },
});

export default ApodListItem;
