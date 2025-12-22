// NYC DOE & National Holidays (2025-2026 School Year)
const events = [
  // December 2025
  {
    id: 1,
    date: new Date(2025, 11, 24), // Dec 24
    title: "Winter Recess Begins",
    titleES: "Inicio del Receso de Invierno",
    category: "holiday",
    allDay: true,
    description: "Schools closed for Winter Recess."
  },
  {
    id: 2,
    date: new Date(2025, 11, 25), // Dec 25
    title: "Christmas Day",
    titleES: "Día de Navidad",
    category: "holiday",
    allDay: true,
    description: "Schools closed."
  },
  {
    id: 3,
    date: new Date(2025, 11, 31), // Dec 31
    title: "Winter Recess Ongoing",
    titleES: "Receso de Invierno en curso",
    category: "holiday",
    allDay: true,
    description: "Schools closed."
  },

  // January 2026
  {
    id: 4,
    date: new Date(2026, 0, 1), // Jan 1
    title: "New Year's Day",
    titleES: "Año Nuevo",
    category: "holiday",
    allDay: true,
    description: "Schools closed."
  },
  {
    id: 5,
    date: new Date(2026, 0, 19), // Jan 19
    title: "Rev. Dr. Martin Luther King Jr. Day",
    titleES: "Día del Rev. Dr. Martin Luther King Jr.",
    category: "holiday",
    allDay: true,
    description: "Schools closed."
  },
  {
    id: 6,
    date: new Date(2026, 0, 26), // Jan 26 (Professional Development - Typical late Jan)
    title: "Professional Development Day",
    titleES: "Día de Desarrollo Profesional",
    category: "academic",
    allDay: true,
    description: "No school for students."
  },

  // February 2026
  {
    id: 7,
    date: new Date(2026, 1, 16), // Feb 16
    title: "Midwinter Recess Begins (Presidents' Day)",
    titleES: "Inicio del Receso de Mitad de Invierno",
    category: "holiday",
    allDay: true,
    description: "Schools closed for Midwinter Recess."
  },
  {
    id: 8,
    date: new Date(2026, 1, 17), // Feb 17
    title: "Lunar New Year",
    titleES: "Año Nuevo Lunar",
    category: "holiday",
    allDay: true,
    description: "Schools closed."
  },
  {
    id: 9,
    date: new Date(2026, 1, 20), // Feb 20
    title: "Midwinter Recess Ends",
    titleES: "Fin del Receso de Mitad de Invierno",
    category: "holiday",
    allDay: true,
    description: "Last day of Midwinter Recess."
  },

  // March 2026
  {
    id: 10,
    date: new Date(2026, 2, 19), // March 19 (Parent Teacher Conferences - Estimate)
    title: "Afternoon Parent Teacher Conferences",
    titleES: "Conferencias de Padres y Maestros",
    category: "academic",
    startTime: "12:30 PM",
    endTime: "3:00 PM",
    description: "Early dismissal for students. Conferences held in the afternoon."
  },
  {
    id: 11,
    date: new Date(2026, 2, 20), // March 20
    title: "Eid al-Fitr",
    titleES: "Eid al-Fitr",
    category: "holiday",
    allDay: true,
    description: "Schools closed."
  },

  // April 2026
  {
    id: 12,
    date: new Date(2026, 3, 2), // April 2
    title: "First Day of Passover / Spring Recess Begins",
    titleES: "Primer Día de Pascua / Inicio del Receso de Primavera",
    category: "holiday",
    allDay: true,
    description: "Schools closed for Spring Recess."
  },
  {
    id: 13,
    date: new Date(2026, 3, 3), // April 3
    title: "Good Friday",
    titleES: "Viernes Santo",
    category: "holiday",
    allDay: true,
    description: "Schools closed."
  },
  {
    id: 14,
    date: new Date(2026, 3, 10), // April 10
    title: "Spring Recess Ends",
    titleES: "Fin del Receso de Primavera",
    category: "holiday",
    allDay: true,
    description: "Last day of Spring Recess."
  },

  // May 2026
  {
    id: 15,
    date: new Date(2026, 4, 7), // May 7 (Parent Teacher Conferences - Estimate)
    title: "Evening Parent Teacher Conferences",
    titleES: "Conferencias de Padres y Maestros (Noche)",
    category: "academic",
    startTime: "4:30 PM",
    endTime: "7:30 PM",
    description: "Conferences held in the evening. Regular school day."
  },
  {
    id: 16,
    date: new Date(2026, 4, 25), // May 25
    title: "Memorial Day",
    titleES: "Día de los Caídos",
    category: "holiday",
    allDay: true,
    description: "Schools closed."
  },
  {
    id: 17,
    date: new Date(2026, 4, 27), // May 27
    title: "Eid al-Adha",
    titleES: "Eid al-Adha",
    category: "holiday",
    allDay: true,
    description: "Schools closed."
  },

  // June 2026
  {
    id: 18,
    date: new Date(2026, 5, 4), // June 4
    title: "Anniversary Day / Chancellor's Conference Day",
    titleES: "Día del Aniversario",
    category: "academic",
    allDay: true,
    description: "Students do not attend school."
  },
  {
    id: 19,
    date: new Date(2026, 5, 9), // June 9
    title: "Clerical Day",
    titleES: "Día Administrativo",
    category: "academic",
    allDay: true,
    description: "Students do not attend school."
  },
  {
    id: 20,
    date: new Date(2026, 5, 19), // June 19
    title: "Juneteenth",
    titleES: "Juneteenth",
    category: "holiday",
    allDay: true,
    description: "Schools closed."
  },
  {
    id: 21,
    date: new Date(2026, 5, 26), // June 26
    title: "Last Day of School",
    titleES: "Último Día de Clases",
    category: "academic",
    allDay: true,
    description: "Early dismissal. Have a great summer!"
  }
];

export default events;
