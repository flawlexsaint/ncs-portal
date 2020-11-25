import React, { createContext, useState } from "react";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [Students, setStudents] = useState([
    {
      image: null,
      name: "Devon Sarah Robertson",
      school: "Isolo Grammar Schoolm, Mushin",
      score: "75%",
      duration: "30 Minutes",
      class: "Basic 9",
      questions: "94/100",
      gender: "Female",
      age: 13,
      state: "Abuja",
      checked: false,
      date: "17 March 2020",
    },
    {
      image: null,
      name: "Julie Belema Fox",
      school: "Ansar-ud-deen Model College, Jabi",
      score: "83%",
      duration: "28 Minutes",
      class: "Senior 2",
      questions: "84/100",
      gender: "Male",
      age: 15,
      state: "Nassarawa",
      checked: false,
      date: "16 March 2020",
    },
    {
      image: null,
      name: "Audrey Michael Pena",
      school: "Bessie International School, Oshodi",
      score: "64%",
      duration: "26 Minutes",
      class: "Senior 1",
      questions: "66/100",
      gender: "Female",
      age: 14,
      state: "Gombe",
      checked: false,
      date: "17 March 2020",
    },
    {
      image: null,
      name: "Eleanor Dapo Watson",
      school: "Unity High School, Mafoluku",
      score: "83%",
      duration: "16 Minutes",
      class: "Basic 9",
      questions: "49/100",
      gender: "Male",
      age: 15,
      state: "Lagos",
      checked: false,
      date: "17 March 2020",
    },
    {
      image: null,
      name: "Savannah Gloria Cooper",
      school: "Ikeja Grammar School, Bolade",
      score: "88%",
      duration: "29 Minutes",
      class: "Basic 8",
      questions: "98/100",
      gender: "Female",
      age: 18,
      state: "Lagos",
      checked: false,
      date: "16 March 2020",
    },
    {
      image: null,
      name: "Leslie Mark Russell",
      school: "Onipetesi High School, Dopemu",
      score: "94%",
      duration: "30 Minutes",
      class: "Basic 9",
      questions: "79/100",
      gender: "Male",
      age: 14,
      state: "Benin",
      checked: false,
      date: "16 March 2020",
    },
    {
      image: null,
      name: "Angel Mayowa Steward",
      school: "Kings College, Lagos",
      score: "42%",
      duration: "26 Minutes",
      class: "Senior 3",
      questions: "52/100",
      gender: "Female",
      age: 11,
      state: "Rivers",
      checked: false,
      date: "17 March 2020",
    },
    {
      image: null,
      name: "Harold Uju Henry",
      school: "Holy Trinity College, Kaduna",
      score: "98%",
      duration: "22 Minutes",
      class: "Senior 3",
      questions: "52/100",
      gender: "Female",
      age: 12,
      state: "Ondo",
      checked: false,
      date: "16 March 2020",
    },
    {
      image: null,
      name: "Darlene Adaku Lane",
      school: "LEA Grammar School, Wuse 1",
      score: "78%",
      duration: "27 Minutes",
      class: "Basic",
      questions: "99/100",
      gender: "Male",
      age: 15,
      state: "Jigawa",
      checked: false,
      date: "18 March 2020",
    },
    {
      image: null,
      name: "Ronald Charles Simmmons",
      school: "Onwudili College, PortHarcourt",
      score: "90%",
      duration: "29 Minutes",
      class: "Senior 2",
      questions: "82/100",
      gender: "Female",
      age: 16,
      state: "Kano",
      checked: false,
      date: "18 March 2020",
    },
  ]);

  const [Search, setSearch] = useState("");

  const handleNameSort = (e) => {
    setStudents([...Students.sort((a, b) => [a.name > b.name ? 1 : -1])]);
  };
  const handleScoreSort = () => {
    setStudents([...Students.sort((a, b) => [a.score < b.score ? 1 : -1])]);
  };
  const handleStateSort = () => {
    setStudents([...Students.sort((a, b) => [a.state > b.state ? 1 : -1])]);
  };
  const handleAgeSort = () => {
    setStudents([...Students.sort((a, b) => [a.age > b.age ? 1 : -1])]);
  };
  const handleQuestionSort = () => {
    setStudents([
      ...Students.sort((a, b) => [a.questions < b.questions ? 1 : -1]),
    ]);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <StoreContext.Provider
      value={{
        setStudents,
        handleNameSort,
        handleScoreSort,
        handleStateSort,
        handleAgeSort,
        handleQuestionSort,
        handleSearch,
        Search,
        Students,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
