import { StyleSheet, Image } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { Fonts } from "@/constants/theme";
import { Collapsible } from "@/components/ui/collapsible";

export default function ExploreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#0984e3", dark: "#1e272e" }}
      headerImage={
        <Image
          source={require("@/assets/app.jpeg")}
          style={styles.headerImage}
          resizeMode="cover"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
            color: "#ffffffff",
          }}
        >
          Explore
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.subtitle}>
        Dive into number systems, conversions, and concepts powering digital
        computing.
      </ThemedText>

      <Collapsible title="How to Use This App">
        <ThemedText>
          1. Enter a number{"\n"}
          2. Choose the base you&apos;re converting from{"\n"}
          3. Select the base you want to convert to{"\n"}
          4. Press convert 
        </ThemedText>
      </Collapsible>

      <Collapsible title="Future Features">
        <ThemedText>None for now</ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 250,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 10,
  },
  subtitle: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "500",
  },
});
