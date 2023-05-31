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
    jsonData.main.temp = Math.round(jsonData.main.temp - 273.15)
    jsonData.main.feels_like = Math.round(jsonData.main.feels_like - 273.15)
    document.getElementById("answer").innerHTML = "The weather is " + jsonData.weather[0].main + " with " + jsonData.weather[0].description + "<br /> <br />" + "The temperature right now is " + jsonData.main.temp + "°C but it feels like " + jsonData.main.feels_like + "°C"
    document.getElementById("weather-icon").innerHTML = "<img src= 'https://openweathermap.org/img/wn/" + jsonData.weather[0].icon + "@2x.png'>"
  } catch (error) {
    console.log("An error occurred.")
  }
}

getWeather("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")