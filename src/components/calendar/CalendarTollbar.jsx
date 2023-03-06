export const CalendarTollbar = ( props ) => {
  const { localizer: { messages },
  label,
  views,
  view,
  onNavigate,
  onView, 
  } = props;

  const navigateTo = (action) => {
    onNavigate(action);
  };
  const changeView = (newView) => {
    onView(newView);
  };
  const viewNamesGroup = () => {
    if (views.length > 1) {
      return views.map((name) => (
        <button
          type="button"
          key={name}
          className={`rbc-btn rbc-btn-sm ${ view === name ? 'rbc-active' : '' }`}
          onClick={() => changeView(name)}
        >
          {messages[name]}
        </button>
      ));
    }
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={() => navigateTo('TODAY')}>
          {messages.today}
        </button>
        <button type="button" onClick={() => navigateTo('PREV')}>
          {messages.previous}
        </button>
        <button type="button" onClick={() => navigateTo('NEXT')}>
          {messages.next}
        </button>
      </span>

      <span className="rbc-toolbar-label">{label}</span>

      <span className="rbc-btn-group">{viewNamesGroup()}</span>
    </div>
  );
};
