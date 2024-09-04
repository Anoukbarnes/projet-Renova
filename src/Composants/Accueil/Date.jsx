import React from 'react';

const DateComponent = () => {

  const currentDate = () => {
    const current = new Date();
    const jourSemaine = current.getDay();
    const jourMois = current.getDate();
    const mois = current.getMonth();
    const annee = current.getFullYear();
    
    const joursSemaine = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const moisAnnee = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

    return `${joursSemaine[jourSemaine]}, ${jourMois} ${moisAnnee[mois]} ${annee}`;
  }

  return (
    <div className='flex py-10'>
      <p className='font-bold text-2xl'>{currentDate()}</p>
    </div>
  );
}

export default DateComponent;
