import { useEffect, useState } from "react";
import Header from "./Components/Header";
import ToolBox from "./Components/ToolBox";
import Card from "./Components/Card";
import NotFound from "./Components/NotFound";

function App() {
  const [country, setCountry] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState([]);
  const [regionName, setRegionName] = useState("");
  const [found, setFound] = useState(true);
  const [subregionboolean, setSubregionBoolean] = useState(false);
  const [subregions, setSubregions] = useState([]);
  const [subregionCard, setsubregionCard] = useState([]);
  const [searchtext, setSearchText] = useState("");

  function onclickpopulation(e) {
    console.log("order");
    var sortByPopulation = [...filter];
    if (e.target.text === "By Accending") {
      sortByPopulation.sort((a, b) => {
        return a.population - b.population;
      });
    } else {
      sortByPopulation.sort((a, b) => {
        return b.population - a.population;
      });
    }
    setFilter(sortByPopulation);
  }
  function onchangeSubregion(e) {
    console.log(e.target.text);
    // setFilter(sub);
    const sub = subregionCard.filter((c) => {
      return c.subregion.includes(e.target.text);
    });

    setFilter(sub);
  }

  function onclickarea(e) {
    var sortByArea = [...filter];
    if (e.target.text === "By Accending") {
      sortByArea.sort((a, b) => {
        return a.area - b.area;
      });
    } else {
      sortByArea.sort((a, b) => {
        return b.area - a.area;
      });
    }
    setFilter(sortByArea);
  }

  function onclick(e) {
    console.log(e.target.text);

    if (e.target.text === "All Regions") {
      setSubregionBoolean(false);
      setFilter(country);
      setRegionName(" ");
      setSearch(country);
    } else {
      setSubregionBoolean(true);
      const filteredData = country.filter((c) => {
        return c.region.includes(e.target.text);
      });

      setSubregions([]);
      filteredData.map((c) => {
        setSubregions((prevSubregions) => {
          if (!prevSubregions.includes(c.subregion)) {
            return [...prevSubregions, c.subregion];
          }
          return prevSubregions;
        });
      });
      console.log(filteredData);

      setRegionName(" : " + e.target.text);
      setSearch(filteredData);
      setFilter(filteredData);
      setsubregionCard(filteredData);
    }
  }
  function onchange(e) {
    console.log(e.target.value);
    if (e.target.value === "") {
      setFound(true);
      setFilter(search);
    } else {
      const searchData = search.filter((c) =>
        c.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (searchData.length == 0) {
        setFound(false);
      } else {
        setFound(true);
        setFilter(searchData);
      }
    }
  }

  useEffect(() => {
    var fun = async () => await fetch("https://restcountries.com/v3.1/all");
    fun()
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
        setFilter(data);
        setSearch(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <ToolBox
        onclick={onclick}
        onchange={onchange}
        onclickpopulation={onclickpopulation}
        onclickarea={onclickarea}
        regionName={regionName}
        subregions={subregions}
        boolean={subregionboolean}
        onchangesub={onchangeSubregion}
      />
      {found ? (
        <div className="countries d-flex flex-wrap px-5">
          {filter.map((e) => {
            // console.log(e.area);
            return (
              <Card
                key={e.name.common}
                img={e.flags.png}
                title={e.name.common}
                population={e.population}
                region={e.region}
                capital={e.capital}
              />
            );
          })}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default App;
