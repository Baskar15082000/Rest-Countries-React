import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Search_DropDown from "./Components/Search_DropDown";
import Card from "./Components/Card";
import NotFound from "./Components/NotFound";

function App() {
  const [country, setCountry] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState([]);
  const [regionName, setRegionName] = useState("");
  const [found, setFound] = useState(true);
  const [orderpop, setOrderpop] = useState("");
  const [orderBoolean, setOrderBoolean] = useState(true);

  function onclickpopulation(e) {
    console.log("order");
    var sortByPopulation = [...filter];
    if (e.target.text === "Sort By Accending") {
      sortByPopulation.sort((a, b) => {
        return a.population - b.population;
      });

      setOrderpop(": Increasing");
    } else {
      sortByPopulation.sort((a, b) => {
        return b.population - a.population;
      });

      setOrderpop(": Decreasing");
    }

    setFilter(sortByPopulation);
  }

  function onclick(e) {
    console.log(e.target.text);

    if (e.target.text === "All Regions") {
      setFilter(country);
      setRegionName(" ");
      setSearch(country);
    } else {
      const filteredData = country.filter((c) =>
        c.region.includes(e.target.text)
      );
      setRegionName(" : " + e.target.text);
      setSearch(filteredData);
      setFilter(filteredData);
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
      <Search_DropDown
        onclick={onclick}
        onchange={onchange}
        orderpop={orderpop}
        onclickpopulation={onclickpopulation}
        regionName={regionName}
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
