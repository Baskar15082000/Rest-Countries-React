import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Search_DropDown from "./Components/Search_DropDown";
import Card from "./Components/Card";

function App() {
  const [country, setCountry] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState([]);
  const [regionName, setRegionName] = useState("");

  function onclick(e) {
    console.log(e.target.text);

    if (e.target.text === "All Regions") {
      setFilter(country);
      setRegionName(" ");
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
    if (e.target.value === undefined) {
      setFilter(search);
    } else {
      const searchData = search.filter((c) =>
        c.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      );

      setFilter(searchData);
    }
  }

  useEffect(() => {
    var fun = async () => await fetch("https://restcountries.com/v3.1/all");
    fun()
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
        setFilter(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <Search_DropDown
        onclick={onclick}
        onchange={onchange}
        regionName={regionName}
      />
      <div className="countries d-flex flex-wrap px-5">
        {filter.map((e) => {
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
    </div>
  );
}

export default App;
