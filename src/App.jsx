import React from "react";
import "./App.css";
import { useState } from "react";
import zakir from './Image/zakir.jpg'
import keerthi from './Image/keerthi.jpg'

const App = () => {
  const [list] = useState([
    {
      name: "Keerthi",
      image: `${keerthi}`,
      dob: "1996-12-21", // Ensure the date format is YYYY-MM-DD
    },
    {
      name: "Achu",
      image: "",
      dob: "1997-04-08", // Ensure the date format is YYYY-MM-DD
    },
    {
      name: "Zakir",
      image: `${zakir}`,
      dob: "1996-01-01", // Ensure the date format is YYYY-MM-DD
    },
    {
      name: "Zakir AV",
      image: `${zakir}`,
      dob: "1996-01-15", // Ensure the date format is YYYY-MM-DD
    },
  ]);

  const [setUpcoming, setUpcomingBirthdays] = useState(list);

  function showUpcomingBirthdays() {
    // console.log("list1" , list3);

    const today = new Date();
    const currentYear = today.getFullYear();
    // console.log(today);
    // console.log(currentYear);

    const filteredData = list.filter((person) => {
      const person_dob = new Date(person.dob);

      const birthyear = new Date(
        currentYear,
        person_dob.getMonth(),
        person_dob.getDate()
      );

      // console.log(birthyear);
      // console.log(today);
      return birthyear >= today;
    });
    setUpcomingBirthdays(filteredData);
  }

  console.log(setUpcoming);

  function calculateAge(dob) {
    const Today = new Date();
    const birthdayDate = new Date(dob);
    // alert(birthdayDate)
    const getDay = Today.getDate() - birthdayDate.getDate();
    let age = Today.getFullYear() - birthdayDate.getFullYear();
    const getMonth = Today.getMonth() - birthdayDate.getMonth();

    if (getMonth < 0 || (getMonth === 0 && getDay < 0)) {
      age--;
    }
    return age;
  }

  console.log(list);

  return (
    <div>
      <main>
        <section className="container">
          <article>
            <div className="upcomeing">
              {/* <h3>birthdays today</h3> */}
              <button onClick={showUpcomingBirthdays}>
                Show Upcoming Birthdays
              </button>
              <button onClick={() => setUpcomingBirthdays(list)}>
                Show All Birthdays
              </button>
            </div>
          </article>
          <section>
            {setUpcoming.map((item, index) => (
              // console.log(item.name);

              <article className="person" key={index}>
                <img src={item.image} alt="" />

                <div>
                  <h4>{item.name}</h4>
                  <p>{calculateAge(item.dob)}Years old</p>
                </div>
              </article>
            ))}
          </section>
        </section>
      </main>
    </div>
  );
};

export default App;
