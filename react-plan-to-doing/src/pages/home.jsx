import { useEffect, useState } from "react";

const Home = () => {
  const [add, setAdd] = useState(false);
  const [search, setSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [itemcount, setItemcount] = useState(0);
  const [selectItems, setSelectItems] = useState([]);
  const [itemStatus, setItemStatus] = useState({});
  const [filter, setFilter] = useState("All");

  const clickAdd = () => {
    setAdd(!add);
    setSearch(false);
    if (add && inputValue.trim() !== "") {
      setItem([...item, inputValue]);
      setInputValue("");
    }
  };

  const clickSearch = () => {
    setSearch(!search);
    setAdd(false);
  };

  const handleKeydown = (event) => {
    if (event.key === "Enter") {
      clickAdd();
    }
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredItems = item.filter((item) =>
    item.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    setItemcount(item.length);
  }, [item]);

  const handleItemClick = (clickedItem) => {
    const isSelected = selectItems.includes(clickedItem);
    const updatedSelectedItems = [...selectItems];
    const updatedItemStatus = { ...itemStatus };

    if (isSelected) {
      updatedSelectedItems.splice(updatedSelectedItems.indexOf(clickedItem), 1);
      delete updatedItemStatus[clickedItem];
    } else {
      updatedSelectedItems.push(clickedItem);
      updatedItemStatus[clickedItem] = "Completed";
    }

    setSelectItems(updatedSelectedItems);
    setItemStatus(updatedItemStatus);
  };

  const getActiveItems = () => {
    if (filter === "All") {
      return item.filter((item) => itemStatus[item] !== "Completed");
    }
    return item.filter(
      (item) => !selectItems.includes(item) || itemStatus[item] !== "Completed"
    );
  };

  const getCompletedItems = () => {
    if (filter === "All") {
      return item.filter((item) => itemStatus[item] === "Completed");
    }
    return item.filter(
      (item) => selectItems.includes(item) && itemStatus[item] === "Completed"
    );
  };

  const handleFilter = (filterType) => {
    setFilter(filterType);
    if (filterType === "All") {
      setSelectItems([]);
    } else if (filterType === "Active") {
      setSelectItems(
        Object.keys(itemStatus).filter(
          (item) => itemStatus[item] !== "Completed"
        )
      );
    } else if (filterType === "Completed") {
      setSelectItems(
        Object.keys(itemStatus).filter(
          (item) => itemStatus[item] === "Completed"
        )
      );
    }
  };

  return (
    <div>
      <form action="" className="text-left">
        <div>
          <input
            className={`w-5/6 p-2 m-4 ml-10 border-solid border-2 border-green-800 ${
              add ? "" : "hidden"
            } `}
            type="text"
            placeholder="add new"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeydown}
          />
          <br></br>
          <input
            className={`w-5/6 p-2 m- ml-10 border-solid border-2 border-green-800 ${
              search ? "" : "hidden"
            }`}
            type="search"
            placeholder="search"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
        {filter === "Active" &&
          getActiveItems().map((item, index) => (
            <div
              className="m-4 cursor-pointer"
              key={index}
              onClick={() => handleItemClick(item)}
            >
              <input
                type="checkbox"
                checked={selectItems.includes(item)}
                onChange={() => {}}
                name=""
                id=""
              />
              <span className="ml-2 font-extralight">{item}</span>
            </div>
          ))}

        {filter === "Completed" &&
          getCompletedItems().map((item, index) => (
            <div
              className="m-4 cursor-pointer"
              key={index}
              onClick={() => handleItemClick(item)}
            >
              <input
                type="checkbox"
                checked={selectItems.includes(item)}
                onChange={() => {}}
                name=""
                id=""
              />
              <span className="ml-2 font-extralight">{item}</span>
            </div>
          ))}

        {filter === "All" &&
          filteredItems.map((item, index) => (
            <div
              className="m-4 cursor-pointer"
              key={index}
              onClick={() => handleItemClick(item)}
            >
              <input
                type="checkbox"
                checked={selectItems.includes(item)}
                onChange={() => {}}
                name=""
                id=""
              />
              <span className="ml-2 font-extralight">{item}</span>
            </div>
          ))}
        <hr></hr>
      </form>
      <div className="flex">
        <div className="m-3">
          <button
            className="bg-blue-800 text-white border-solid border-blue-700 borer-2 p-2 font-bold"
            onClick={clickAdd}
          >
            {add ? "cancel" : "add"}
          </button>
          <button
            className="m-2 bg-green-800 text-white border-solid border-green-700 borer-2 p-2 font-bold"
            onClick={clickSearch}
          >
            {search ? "cancel" : "search"}
          </button>
          <button className="bg-red-800 text-white border-solid border-red-700 borer-2 p-2 font-bold">
            {itemcount} items
          </button>
        </div>
        <div className="m-3">
          <button
            className="bg-blue-800 text-white border-solid border-green-700 borer-2 p-2 font-bold"
            onClick={() => handleFilter("All")}
          >
            All
          </button>
          <button
            className="m-2 bg-green-800 text-white border-solid border-green-700 borer-2 p-2 font-bold"
            onClick={() => handleFilter("Active")}
          >
            Active
          </button>
          <button
            className="bg-red-800 text-white border-solid border-red-700 borer-2 p-2 font-bold"
            onClick={() => handleFilter("Completed")}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
