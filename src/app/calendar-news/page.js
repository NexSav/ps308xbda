"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import events from '@/data/events';
import PageHeader from '@/components/PageHeader';

const Calendar = () => {
  const [currentView, setCurrentView] = useState('month');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedFilters, setSelectedFilters] = useState({
    holiday: true,
    academic: true,
    earlyDismissal: true,
    testing: true,
    pta: true,
    afterSchool: true
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [language, setLanguage] = useState('en');
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);

  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    const firstDay = new Date(year, month, 1).getDay();
    for (let i = 0; i < firstDay; i++) days.push(null);
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const getStartOfWeek = (date) => {
    const d = new Date(date);
    const day = d.getDay();
    d.setDate(d.getDate() - day);
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const getWeekDays = () => {
    const base = new Date(currentYear, currentMonth, 1);
    const start = getStartOfWeek(base);
    const weekStart = new Date(start);
    weekStart.setDate(start.getDate() + currentWeekOffset * 7);
    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(weekStart);
      d.setDate(weekStart.getDate() + i);
      days.push(d);
    }
    return { weekStart, days };
  };

  const getFilteredEvents = () => {
    return events.filter(event => selectedFilters[event.category]);
  };

  const getUpcomingEvents = () => {
    const today = new Date();
    return getFilteredEvents()
      .filter(event => event.date >= today)
      .sort((a, b) => a.date - b.date)
      .slice(0, 5);
  };

  const prevMonth = () => {
    if (currentView === 'week') { setCurrentWeekOffset(currentWeekOffset - 1); return; }
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1); } else { setCurrentMonth(currentMonth - 1); }
  };
  const nextMonth = () => {
    if (currentView === 'week') { setCurrentWeekOffset(currentWeekOffset + 1); return; }
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1); } else { setCurrentMonth(currentMonth + 1); }
  };

  const categoryColors = {
    holiday: 'bg-primary', // Use primary for holidays (red)
    academic: 'bg-amber-600',
    earlyDismissal: 'bg-orange-600',
    testing: 'bg-purple-600',
    pta: 'bg-yellow-600',
    afterSchool: 'bg-green-600'
  };

  const getCategoryName = (category) => {
    switch(category) {
      case 'holiday': return 'Holiday';
      case 'academic': return 'Academic';
      case 'earlyDismissal': return 'Early Dismissal';
      case 'testing': return 'Testing';
      case 'pta': return 'PTA';
      case 'afterSchool': return 'After-School';
      default: return category;
    }
  };

  const getCategoryNameES = (category) => {
    switch(category) {
      case 'holiday': return 'Feriado';
      case 'academic': return 'Académico';
      case 'earlyDismissal': return 'Salida Temprana';
      case 'testing': return 'Exámenes';
      case 'pta': return 'PTA';
      case 'afterSchool': return 'Programas Después de Clases';
      default: return category;
    }
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', options);
  };

  const getEventTitle = (event) => (language === 'es' && event.titleES ? event.titleES : event.title);
  const getEventDescription = (event) => (language === 'es' && event.descriptionES ? event.descriptionES : (event.description || ''));

  const toggleFilter = (filter) => setSelectedFilters({ ...selectedFilters, [filter]: !selectedFilters[filter] });

  const getEventsForDay = (day) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === day.getDate() &&
             eventDate.getMonth() === day.getMonth() &&
             eventDate.getFullYear() === day.getFullYear() &&
             (selectedFilters[event.category] || false);
    });
  };

  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const days = getDaysInMonth(currentMonth, currentYear);
  const upcomingEvents = getUpcomingEvents();
  const closeModal = () => setSelectedEvent(null);

  return (
    <div className="relative min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main>
         <PageHeader 
          title="School Calendar"
          subtitle="Stay informed about school events, holidays, and important dates throughout the academic year."
          imageSrc="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop"
        />

        <section id="monthly-calendar" className="py-12 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-20">
              <span className="inline-block bg-primary/10 text-primary px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold uppercase tracking-wider mb-6 md:mb-8 rounded-full">Interactive Calendar</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-heading text-gray-900 mb-6 md:mb-8 leading-tight">Monthly Schedule</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">View school events, filter by category, and stay up-to-date with activities.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="lg:col-span-1 bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 h-fit">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 font-heading">Filter Events</h3>
                <div className="space-y-3">
                  {[
                    ['holiday','Holidays','bg-primary','text-primary'],
                    ['academic','Academic','bg-amber-600','text-amber-600'],
                    ['earlyDismissal','Early Dismissal','bg-orange-600','text-orange-600'],
                    ['testing','Testing','bg-purple-600','text-purple-600'],
                    ['pta','PTA','bg-yellow-600','text-yellow-600'],
                    ['afterSchool','After-School','bg-green-600','text-green-600'],
                  ].map(([key,label,bg,color]) => (
                    <div key={key} className="flex items-center group cursor-pointer" onClick={() => toggleFilter(key)}>
                      <div className={`w-5 h-5 rounded-md border-2 mr-3 flex items-center justify-center transition-colors ${selectedFilters[key] ? 'border-primary bg-primary text-white' : 'border-gray-300 bg-white'}`}>
                        {selectedFilters[key] && <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>}
                      </div>
                      <label htmlFor={`filter-${key}`} className="flex items-center text-gray-700 text-sm md:text-base cursor-pointer select-none">
                        <span className={`h-2 w-2 ${bg} rounded-full mr-2`}></span>
                        {label}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="mt-8 md:mt-10 pt-8 border-t border-gray-100">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 font-heading">Language</h3>
                  <div className="flex bg-gray-100 p-1 rounded-xl">
                    {['en', 'es'].map((lang) => (
                      <button 
                        key={lang}
                        onClick={() => setLanguage(lang)} 
                        className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${language === lang ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 md:mt-10 pt-8 border-t border-gray-100">
                   <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 font-heading">View</h3>
                   <div className="flex bg-gray-100 p-1 rounded-xl mb-4">
                     {['month', 'week', 'list'].map((view) => (
                       <button 
                         key={view}
                         onClick={() => { setCurrentView(view); if(view === 'week') setCurrentWeekOffset(0); }} 
                         className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all capitalize ${currentView === view ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                       >
                         {view}
                       </button>
                     ))}
                   </div>
                   <button 
                     onClick={() => { setCurrentMonth(new Date().getMonth()); setCurrentYear(new Date().getFullYear()); setCurrentWeekOffset(0); }} 
                     className="w-full py-3 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all font-bold text-sm uppercase tracking-wide"
                   >
                     Jump to Today
                   </button>
                </div>

                <div className="mt-8 md:mt-10 pt-8 border-t border-gray-100">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 font-heading">Upcoming</h3>
                  <div className="space-y-4">
                    {upcomingEvents.length > 0 ? (
                      upcomingEvents.map((event) => (
                        <div key={event.id} className="group relative pl-4 border-l-2 cursor-pointer hover:bg-gray-50 p-2 rounded-r-lg transition-colors" 
                             style={{ borderColor: event.category === 'holiday' ? '#bd0606' : '#d97706' }}
                             onClick={() => setSelectedEvent(event)}>
                          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{formatDate(event.date)}</div>
                          <div className="font-bold text-gray-900 group-hover:text-primary transition-colors">{getEventTitle(event)}</div>
                          <div className="text-xs text-gray-500 mt-1">{event.allDay ? 'All Day' : `${event.startTime || ''}`}</div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 italic text-sm">No upcoming events found.</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-white p-6 md:p-8 flex items-center justify-between border-b border-gray-100">
                    <div className="flex-1 min-w-0">
                      {currentView === 'week' ? (
                        (() => {
                          const { days } = getWeekDays();
                          const startLabel = `${days[0].toLocaleString('default', { month: 'short' })} ${days[0].getDate()}`;
                          const endLabel = `${days[6].toLocaleString('default', { month: 'short' })} ${days[6].getDate()}`;
                          return <h3 className="text-xl md:text-2xl font-bold font-heading text-gray-900">Week of {startLabel} – {endLabel}</h3>;
                        })()
                      ) : (
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-gray-900">{monthNames[currentMonth]} {currentYear}</h3>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <button onClick={prevMonth} className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:border-primary hover:text-white transition-all">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </button>
                      <button onClick={nextMonth} className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:border-primary hover:text-white transition-all">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 text-center bg-secondary border-b border-gray-100">
                    {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((day, i) => (
                      <div key={i} className="py-4 font-bold text-gray-500 text-xs md:text-sm uppercase tracking-widest">{day}</div>
                    ))}
                  </div>

                  {currentView === 'month' && (
                    <div className="grid grid-cols-7 auto-rows-fr min-h-[500px] md:min-h-[700px] bg-gray-50 gap-px border-l border-gray-100">
                      {days.map((day, index) => {
                        const dayEvents = day ? getEventsForDay(day) : [];
                        const isToday = day && day.toDateString() === new Date().toDateString();
                        return (
                          <div key={index} className={`bg-white relative p-2 md:p-3 transition-colors hover:bg-gray-50/50 ${!day ? 'bg-gray-50/30' : ''}`}>
                            {day && (
                              <>
                                <div className={`text-right mb-2 text-sm font-medium ${isToday ? 'inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white font-bold ml-auto' : 'text-gray-500'}`}>
                                    {day.getDate()}
                                </div>
                                <div className="space-y-1.5 overflow-y-auto max-h-[80px] md:max-h-[100px] custom-scrollbar">
                                  {dayEvents.map((event) => (
                                    <button key={event.id} onClick={() => setSelectedEvent(event)} className={`text-[10px] md:text-xs w-full text-left px-2 py-1 rounded-md text-white font-medium shadow-sm hover:opacity-90 transition-opacity truncate ${categoryColors[event.category]}`} title={getEventTitle(event)}>
                                      {getEventTitle(event)}
                                    </button>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {currentView === 'week' && (() => {
                    const { days: weekDays } = getWeekDays();
                    return (
                      <div className="bg-gray-50 gap-px border-l border-gray-100 grid grid-cols-7 min-h-[500px]">
                        {weekDays.map((day, index) => {
                          const dayEvents = getEventsForDay(day);
                          const isToday = day.toDateString() === new Date().toDateString();
                          return (
                            <div key={index} className="bg-white p-3">
                              <div className={`text-center mb-4 pb-2 border-b border-gray-100 ${isToday ? 'text-primary font-bold' : ''}`}>
                                 <span className="text-lg">{day.getDate()}</span>
                              </div>
                              <div className="space-y-2">
                                {dayEvents.map((event) => (
                                  <button key={event.id} onClick={() => setSelectedEvent(event)} className={`text-xs w-full text-left px-2 py-1.5 rounded-md text-white font-medium shadow-sm hover:opacity-90 ${categoryColors[event.category]}`}>
                                    <div className="truncate font-bold">{getEventTitle(event)}</div>
                                    {!event.allDay && <div className="text-[10px] opacity-90">{event.startTime}</div>}
                                  </button>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}

                  {currentView === 'list' && (
                    <div className="bg-white p-6 md:p-8 min-h-[500px]">
                      <div className="space-y-4">
                        {getFilteredEvents()
                          .filter(event => event.date.getMonth() === currentMonth && event.date.getFullYear() === currentYear)
                          .sort((a, b) => a.date - b.date)
                          .map(event => (
                            <div key={event.id} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-secondary border border-gray-100 hover:shadow-md transition-all cursor-pointer group" onClick={() => setSelectedEvent(event)}>
                              <div className="flex-shrink-0 flex md:flex-col items-center justify-center md:w-24 md:h-24 bg-white rounded-xl border border-gray-100 shadow-sm p-4 gap-2 md:gap-0">
                                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{event.date.toLocaleString('default', { month: 'short' })}</span>
                                <span className="text-3xl font-bold text-gray-900">{event.date.getDate()}</span>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                   <span className={`inline-block w-2.5 h-2.5 rounded-full ${categoryColors[event.category]}`}></span>
                                   <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{language === 'es' ? getCategoryNameES(event.category) : getCategoryName(event.category)}</span>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">{getEventTitle(event)}</h4>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                   <span className="flex items-center gap-1.5">
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                      {event.allDay ? 'All Day' : `${event.startTime || ''}${event.startTime && event.endTime ? ' - ' : ''}${event.endTime || ''}`}
                                   </span>
                                   {event.location && (
                                     <span className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                        {event.location}
                                     </span>
                                   )}
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {selectedEvent && (
          <div className="fixed inset-0 z-[60] overflow-y-auto" role="dialog" aria-modal="true">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" aria-hidden="true" onClick={closeModal}></div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-[2rem] text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative">
                <div className={`${categoryColors[selectedEvent.category]} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                  <h3 className="text-2xl font-bold font-heading relative z-10">{getEventTitle(selectedEvent)}</h3>
                  <p className="text-white/90 mt-2 font-medium relative z-10">{formatDate(selectedEvent.date)}</p>
                  <button onClick={closeModal} className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full text-white transition-colors">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                  </button>
                </div>
                <div className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 text-gray-600">
                       <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                       <div>
                          <p className="font-bold text-gray-900 text-sm uppercase tracking-wide">Time</p>
                          <p>{selectedEvent.allDay ? (language === 'es' ? 'Todo el día' : 'All Day') : (selectedEvent.time ? selectedEvent.time : `${selectedEvent.startTime || ''}${selectedEvent.startTime && selectedEvent.endTime ? ' - ' : ''}${selectedEvent.endTime || ''}`)}</p>
                       </div>
                    </div>
                    {selectedEvent.location && (
                      <div className="flex items-start gap-3 text-gray-600">
                         <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                         <div>
                            <p className="font-bold text-gray-900 text-sm uppercase tracking-wide">Location</p>
                            <p>{selectedEvent.location}</p>
                         </div>
                      </div>
                    )}
                    <div className="pt-4 border-t border-gray-100">
                       <p className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">Description</p>
                       <p className="text-gray-600 leading-relaxed">{getEventDescription(selectedEvent)}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-8 py-4 flex justify-end">
                  {selectedEvent.link && (
                    <a href={selectedEvent.link} className="inline-flex justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-xl text-white bg-primary hover:bg-primary/90 transition-all shadow-md hover:shadow-lg" target="_blank" rel="noopener noreferrer">
                      More Details
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default Calendar;

