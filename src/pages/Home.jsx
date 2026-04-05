import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import { realtimeDB, db } from '../firebase';
import { ref, get } from 'firebase/database';
import { collection, getDocs } from 'firebase/firestore';
import Hero from '../components/Hero';
import ContactInfo from '../components/ContactInfo';
import ExperienceList from '../components/ExperienceList';
import TechStack from '../components/TechStack';
import ShoutoutList from '../components/ShoutoutList';
import { personalInfo, contactDetails, experienceData, technologiesData } from '../lib/data';

export default function Home() {
  const user = useSelector(selectUser);
  const [dynamicName, setDynamicName] = useState(personalInfo.name);
  const [dynamicEmail, setDynamicEmail] = useState(contactDetails.email);
  const [dynamicExperience, setDynamicExperience] = useState(experienceData);
  const [shoutouts, setShoutouts] = useState([]);

  useEffect(() => {
    const userRef = ref(realtimeDB, 'user/');
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log(data)
          if (data.name) setDynamicName(data.name);
          if (data.email) setDynamicEmail(data.email);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "experience"));
        const expList = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            companyName: data.company,
            roles: [
              {
                title: data.designation,
                duration: data.duration || ""
              }
            ]
          };
        });
        if (expList.length > 0) {
          setDynamicExperience(expList);
        }
      } catch (error) {
        console.error("Error fetching experience data:", error);
      }
    };

    fetchExperience();
  }, []);

  useEffect(() => {
    const fetchShoutouts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "shoutouts"));
        const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setShoutouts(list);
      } catch (error) {
        console.error("Error fetching shoutouts:", error);
      }
    };

    fetchShoutouts();
  }, []);

  return (
    <div className="container py-4 fade-in">
      <Hero
        name={dynamicName}
        title={personalInfo.title}
        highlight={personalInfo.highlight}
      />

      <div className="row mt-4">
        <div className="col-12 col-lg-8 mx-auto">
          <ContactInfo
            email={dynamicEmail}
            phone={contactDetails.phone}
            linkedin={contactDetails.linkedin}
          />

          <ExperienceList experiences={dynamicExperience} />

          <TechStack technologies={technologiesData} />
          
          <ShoutoutList shoutouts={shoutouts} />
        </div>
      </div>
    </div>
  );
}
