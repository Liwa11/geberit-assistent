// client-configs/geberit.js

const voorraadData = [
  {
    artikelnummer: "2456A",
    naam: "Kraan 1/2 inch",
    voorraad: 12,
    volgendeLevering: "2025-04-01",
    leveringAantal: 30,
    leverancier: "Sanitair Supply BV"
  },
  {
    artikelnummer: "3870B",
    naam: "Afvoerpijp 40mm",
    voorraad: 5,
    volgendeLevering: "2025-03-30",
    leveringAantal: 50,
    leverancier: "BouwGroothandel.nl"
  },
  {
    artikelnummer: "6621X",
    naam: "WC-element inbouw",
    voorraad: 0,
    volgendeLevering: "2025-04-07",
    leveringAantal: 20,
    leverancier: "Geberit Intern"
  },
  {
    artikelnummer: "9903C",
    naam: "Flexibele slang 3/4 inch",
    voorraad: 7,
    volgendeLevering: "2025-04-02",
    leveringAantal: 40,
    leverancier: "Sanitair Supply BV"
  },
  {
    artikelnummer: "1287F",
    naam: "Hoekstopkraan 1/2 inch",
    voorraad: 15,
    volgendeLevering: "2025-04-03",
    leveringAantal: 25,
    leverancier: "Kraan & Co"
  },
  {
    artikelnummer: "7720M",
    naam: "Douchegoot RVS 80cm",
    voorraad: 2,
    volgendeLevering: "2025-04-05",
    leveringAantal: 10,
    leverancier: "BouwGroothandel.nl"
  },
  {
    artikelnummer: "4501Z",
    naam: "Thermostatische mengkraan",
    voorraad: 4,
    volgendeLevering: "2025-04-06",
    leveringAantal: 8,
    leverancier: "Sanitair Techniek NV"
  },
  {
    artikelnummer: "6633K",
    naam: "Wandcloset hangend model",
    voorraad: 1,
    volgendeLevering: "2025-04-08",
    leveringAantal: 5,
    leverancier: "Geberit Intern"
  },
  {
    artikelnummer: "3344D",
    naam: "Koppelstuk 40mm PVC",
    voorraad: 40,
    volgendeLevering: "2025-04-04",
    leveringAantal: 100,
    leverancier: "PVC Specialist BV"
  },
  {
    artikelnummer: "5577G",
    naam: "Sifon wasbak chroom",
    voorraad: 3,
    volgendeLevering: "2025-04-09",
    leveringAantal: 12,
    leverancier: "BouwGroothandel.nl"
  },
  {
    artikelnummer: "8812H",
    naam: "Badkraan wandmontage",
    voorraad: 0,
    volgendeLevering: "2025-04-10",
    leveringAantal: 6,
    leverancier: "Kraan & Co"
  },
  {
    artikelnummer: "1122P",
    naam: "Handdouche met slang",
    voorraad: 6,
    volgendeLevering: "2025-04-11",
    leveringAantal: 20,
    leverancier: "Sanitair Techniek NV"
  }
];
  
  const systemPrompt = `
  Je bent een interne AI-assistent voor Geberit. Je taak is om medewerkers te helpen met vragen over magazijnbeheer. 
  Gebruik onderstaande data om zo accuraat mogelijk te antwoorden.
  
  Als iemand vraagt "Wat is de voorraad van een artikel?" of "Wanneer komt levering van X?", gebruik dan de gegevens.
  
  Hier is de voorraaddata:
  ${JSON.stringify(voorraadData, null, 2)}
  
  Wees kort, concreet en zakelijk in je antwoorden.
  `;
  
  export default {
    name: 'Geberit Assistent',
    logo: require('../assets/geberit-logo3.png'), // Zorg dat dit pad klopt
    primaryColor: '#0072CE',
    systemPrompt: 'Je bent een Geberit assistent...',
  };