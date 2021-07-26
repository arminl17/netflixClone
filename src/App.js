import React, { Component } from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
    <Nav />
    <Banner />
    <Row title="NETFLIX ORIGINALS"  fetchUrl = {requests.getNetflixOriginals} isLargeRow />
    <Row title="Trending Now" fetchUrl = {requests.getTrending} />
    <Row title="Top Rated" fetchUrl = {requests.getTopRated} />
    <Row title="Action movies" fetchUrl = {requests.getActionMovies} />
    <Row title="Comedy movies" fetchUrl = {requests.getComedyMovies} />
    <Row title="Romance movies" fetchUrl = {requests.getRomanceMovies} />
    <Row title="Horror movies" fetchUrl = {requests.getHorrorMovies} />
    <Row title="Documentaries" fetchUrl = {requests.getDocumentaries} />

    </div>
  );
}

export default App;
