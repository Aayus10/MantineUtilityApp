import {
  Button,
  TextInput,
  Image,
  Text,
  Title,
  Box,
  Accordion,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { useState } from "react";

import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import haze_icon from "../assets/haze.png";
import "./Button.css";

function ButtonComponent() {
  const computedcolorscheme = useComputedColorScheme();
  let api_key = "ccd5cfe259001d85c1fbdbf2609083c5";
  const [placeName, setplaceName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [windspeed, setwindspeed] = useState<string>("");
  const [humidity, sethumidity] = useState<string>("");
  const [wIcon, setwIcon] = useState<string>("");
  const [feelslike, setFeellike] = useState<string>("");
  const [temp, setTemp] = useState<string>("");

  const updateweather = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${placeName}&units=Metric&appid=${api_key}`;
      let response = await fetch(url);
      let data = await response.json();

      if (data.cod && data.cod !== "404") {
        // Valid data is available
        setTemp(data.main.temp);
        setLocation(data.name);
        setwindspeed(data.wind.speed);
        sethumidity(data.main.humidity);

        setFeellike(data.main.feels_like);

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
          setwIcon(clear_icon);
        } else if (
          data.weather[0].icon === "03d" ||
          data.weather[0].icon === "03n"
        ) {
          setwIcon(drizzle_icon);
        } else if (
          data.weather[0].icon === "02d" ||
          data.weather[0].icon === "02n" ||
          data.weather[0].icon === "04d" ||
          data.weather[0].icon === "04n"
        ) {
          setwIcon(cloud_icon);
        } else if (
          data.weather[0].icon === "09d" ||
          data.weather[0].icon === "09n"
        ) {
          setwIcon(rain_icon);
        } else if (
          data.weather[0].icon === "50d" ||
          data.weather[0].icon === "50n"
        ) {
          setwIcon(haze_icon);
        } else if (
          data.weather[0].icon === "13d" ||
          data.weather[0].icon === "13n"
        ) {
          setwIcon(snow_icon);
        } else {
          setwIcon(rain_icon);
        }
      } else {
        // No valid data found
        alert("No data found for the specified city.");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("An error occurred while fetching weather data.");
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: computedcolorscheme === "light" ? "" : "",
      }}
    >
      <Box style={{ marginLeft: "30%", width: "40%" }}>
        <Title style={{ marginLeft: "5%", marginTop: "22px" }} order={2}>
          Weather Application
        </Title>
        <br />
        <div className="text-input">
          <TextInput
            id="mybox"
            size="xl"
            radius="md"
            onChange={(e) => {
              setplaceName(e.target.value);
            }}
            placeholder="Which city's weather do you want to know?"
          ></TextInput>

          <div className="search-btn">
            <Button variant="filled" color="teal" onClick={updateweather}>
              Search
            </Button>
          </div>
        </div>
        <br />
        <div className="wicon">
          <Image
            className="image"
            style={{
              backgroundColor: computedcolorscheme === "dark" ? "" : "#012F52",
              padding: "-100px",
              height: "170px",
              width: "170px",
              marginTop: "5%",
            }}
            radius="md"
            src={wIcon}
          />
          <br />
          <Title order={1}>
            {location === "" ? "" : `${location} `}
            <br />
            {temp === "" ? "" : `${temp} °C`}
          </Title>
          <Text size="xl">
            {feelslike === "" ? "" : `Feels like ${feelslike} °C`}
          </Text>
        </div>
        <br />
      </Box>
      <Accordion style={{ marginLeft: "30%", width: "40%" }} radius="sm">
        <Accordion.Item
          style={{ border: "1px solid black" }}
          value="wind-speed"
        >
          <Accordion.Control
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <strong>Wind Speed</strong>
          </Accordion.Control>
          <Accordion.Panel
            style={{
              textAlign: "center",
              fontWeight: "bold",
              backgroundColor: computedcolorscheme === "light" ? "#EBF5FC" : "",
            }}
          >
            {windspeed === "" ? "" : `${windspeed} km/h`}
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item style={{ border: "1px solid black" }} value="humidity">
          <Accordion.Control
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <strong>Humidity</strong>
          </Accordion.Control>
          <Accordion.Panel
            style={{
              textAlign: "center",
              fontWeight: "bold",
              backgroundColor: computedcolorscheme === "light" ? "#EBF5FC" : "",
            }}
          >
            {humidity === "" ? "" : `${humidity} %`}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default ButtonComponent;
