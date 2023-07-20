import { StyleSheet, FlatList, ActivityIndicator, View } from "react-native";
import ApodListItem from "../components/ApodListItem";
import { useEffect, useState } from "react";
import FullScreenImage from "../components/FullScreenImage";
import { Apod } from "../types";
import { fetchApods } from "../api/apods";
import SelectDate from "../components/SelectDate";
import { dateFormatter, formatDateForAPI } from "../utils";
import Loading from "../components/Loading";

export default function Page() {
  const [apods, setApods] = useState<Apod[]>(null);
  const [activePicture, setActivePicture] = useState<string>(null);
  const initialStart = formatDateForAPI(
    new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)
  );
  const initialEnd = formatDateForAPI(new Date(Date.now()));
  const [startDate, setStartDate] = useState(initialStart);
  const [endDate, setEndDate] = useState(initialEnd);

  useEffect(() => {
    fetchApods(dateFormatter(startDate), dateFormatter(endDate)).then(setApods);
  }, [startDate, endDate]);

  const props = { startDate, setStartDate, endDate, setEndDate };

  return (
    <View>
      <SelectDate {...props} />
      {apods ? (
        <FlatList
          data={apods}
          renderItem={({ item }) => (
            <ApodListItem
              apod={item}
              onImagePress={() => setActivePicture(item.url)}
            />
          )}
        />
      ) : (
        <Loading />
      )}
      <FullScreenImage
        url={activePicture}
        onClose={() => setActivePicture(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
