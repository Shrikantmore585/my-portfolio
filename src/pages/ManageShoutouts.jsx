import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import ShoutoutList from '../components/ShoutoutList';

export default function ManageShoutouts() {
  const [shoutouts, setShoutouts] = useState([]);

  useEffect(() => {
    const fetchShoutouts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "shoutouts"));
        const list = querySnapshot.docs.map(document => ({ id: document.id, ...document.data() }));
        setShoutouts(list);
      } catch (error) {
        console.error("Error fetching shoutouts:", error);
      }
    };

    fetchShoutouts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "shoutouts", id));
      setShoutouts(shoutouts.filter(shoutout => shoutout.id !== id));
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <div className="container py-5 fade-in">
      <h2 className="text-center mb-4" style={{ color: 'var(--text-primary)' }}>Manage Shoutouts</h2>
      <ShoutoutList shoutouts={shoutouts} onDelete={handleDelete} />
    </div>
  );
}
