// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mariam Kasim
// Created on: Mar 2023
// This file contains the JS functions for index.html

"use strict"

const getWeather = async (URLAddress) => {
  try{
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    const temperature = jsonData.main.temp
    const temperatureFeelsLike = jsonData.main.feels_like

    temperature = Math.round(temperature - 273.15)
    temperatureFeelsLike = Math.round(temperatureFeelsLike - 273.15)

    document.getElementById("answer").innerHTML = "The temperature is " + temperature + " with " + jsonData.weather[0].description + "<br /> <br />" + "The temperature right now is " + temperature + "°C but it feels like " + temperatureFeelsLike + "°C"
    document.getElementById("weather-icon").innerHTML = "<img src='http://openweathermap.org/img/w/" + jsonData.weather[0].icon + "@2x.png'>"
  } catch (error) {
    console.log("An error occurred.")
  }
}

getWeather("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")