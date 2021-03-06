import React, { useState } from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  MonthView,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  TodayButton,
  AppointmentTooltip,
  Resources,
  WeekView,
} from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles, Theme, createStyles, Grid, IconButton } from '@material-ui/core';
import { blue, indigo, teal, yellow } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { WithStyles } from '@material-ui/styles';
import People from '@material-ui/icons/People';
import MoreIcon from '@material-ui/icons/MoreVert';
import classNames from 'clsx';

const appointments = [
  {
    title: 'Prepare 2015 Marketing Plan',
    startDate: new Date(2021, 5, 25, 13, 0),
    endDate: new Date(2021, 5, 25, 13, 30),
    priority: 2,
    location: 'Room 3',
    advisor: 'Kiara',
    bgUrl: 'http://placeimg.com/640/480/nature',
  },
  {
    title: 'Brochure Design Review',
    startDate: new Date(2021, 5, 28, 14, 10),
    endDate: new Date(2021, 5, 28, 15, 30),
    priority: 1,
    location: 'Room 1',
    advisor: 'Anna',
    bgUrl: 'http://placeimg.com/640/480/abstract',
  },
  {
    title: 'Website Re-Design Plan',
    startDate: new Date(2021, 5, 29, 9, 30),
    endDate: new Date(2021, 5, 29, 11, 30),
    priority: 1,
    location: 'Room 3',
    advisor: 'Damian',
    bgUrl: 'http://placeimg.com/640/480/nature',
  },
  {
    title: 'Book Flights to San Fran for Sales Trip',
    startDate: new Date(2021, 6, 2, 12, 0),
    endDate: new Date(2021, 6, 2, 13, 0),
    priority: 3,
    location: 'Room 2',
    advisor: 'Aliyah',
    bgUrl: 'http://placeimg.com/640/480/business',
  },
  {
    title: 'Install New Router in Dev Room',
    startDate: new Date(2021, 6, 2, 14, 30),
    endDate: new Date(2021, 6, 2, 15, 30),
    priority: 2,
    location: 'Room 3',
    advisor: 'Yesenia',
    bgUrl: 'http://placeimg.com/640/480/nightlife',
  },
  {
    title: 'Approve Personal Computer Upgrade Plan',
    startDate: new Date(2021, 6, 4, 10, 0),
    endDate: new Date(2021, 6, 4, 11, 0),
    priority: 1,
    location: 'Room 1',
    advisor: 'Devyn',
    bgUrl: 'http://placeimg.com/640/480/business',
  },
  {
    title: 'Final Budget Review',
    startDate: new Date(2021, 6, 6, 12, 0),
    endDate: new Date(2021, 6, 6, 13, 35),
    priority: 3,
    location: 'Room 1',
    advisor: 'Raoul',
    bgUrl: 'http://placeimg.com/640/480/fashion',
  },
  {
    title: 'New Brochures',
    startDate: new Date(2021, 6, 6, 14, 30),
    endDate: new Date(2021, 6, 6, 15, 45),
    priority: 3,
    location: 'Room 3',
    advisor: 'Daphne',
    bgUrl: 'http://placeimg.com/640/480/animals',
  },
  {
    title: 'Install New Database',
    startDate: new Date(2021, 6, 10, 9, 45),
    endDate: new Date(2021, 6, 10, 11, 15),
    priority: 2,
    location: 'Room 2',
    advisor: 'Clemens',
    bgUrl: 'http://placeimg.com/640/480/fashion',
  },
  {
    title: 'Approve New Online Marketing Strategy',
    startDate: new Date(2021, 6, 12, 12, 0),
    endDate: new Date(2021, 6, 12, 14, 0),
    priority: 1,
    location: 'Room 2',
    advisor: 'Ronny',
    bgUrl: 'http://placeimg.com/640/480/food',
  },
  {
    title: 'Upgrade Personal Computers',
    startDate: new Date(2021, 6, 16, 15, 15),
    endDate: new Date(2021, 6, 16, 16, 30),
    priority: 2,
    location: 'Room 3',
    advisor: 'Junior',
    bgUrl: 'http://placeimg.com/640/480/fashion',
  },
  {
    title: 'Customer Workshop',
    startDate: new Date(2021, 6, 18, 11, 0),
    endDate: new Date(2021, 6, 18, 12, 0),
    priority: 3,
    location: 'Room 1',
    advisor: 'Delaney',
    bgUrl: 'http://placeimg.com/640/480/people',
  },
  {
    title: 'Prepare 2015 Marketing Plan',
    startDate: new Date(2021, 6, 20, 11, 0),
    endDate: new Date(2021, 6, 20, 13, 30),
    priority: 1,
    location: 'Room 3',
    advisor: 'Alexanne',
    bgUrl: 'http://placeimg.com/640/480/abstract',
  },
  {
    title: 'New Brochures',
    startDate: new Date(2021, 6, 23, 14, 30),
    endDate: new Date(2021, 6, 23, 15, 45),
    priority: 2,
    location: 'Room 3',
    advisor: 'Floyd',
    bgUrl: 'http://placeimg.com/640/480/abstract',
  },
  {
    title: 'Install New Database',
    startDate: new Date(2021, 6, 23, 9, 45),
    endDate: new Date(2021, 6, 23, 11, 15),
    priority: 3,
    location: 'Room 2',
    advisor: 'Clovis',
    bgUrl: 'http://placeimg.com/640/480/nature',
  },
  {
    title: 'Approve New Online Marketing Strategy',
    startDate: new Date(2021, 6, 26, 12, 0),
    endDate: new Date(2021, 6, 26, 14, 0),
    priority: 1,
    location: 'Room 1',
    advisor: 'Fay',
    bgUrl: 'http://placeimg.com/640/480/technics',
  },
  {
    title: 'Upgrade Personal Computers',
    startDate: new Date(2021, 6, 31, 15, 15),
    endDate: new Date(2021, 6, 31, 16, 30),
    priority: 2,
    location: 'Room 3',
    advisor: 'Eriberto',
    bgUrl: 'http://placeimg.com/640/480/transport',
  },
  {
    title: 'Install New Database',
    startDate: new Date(2021, 6, 31, 9, 45),
    endDate: new Date(2021, 6, 31, 11, 15),
    priority: 3,
    location: 'Room 2',
    advisor: 'Nora',
    bgUrl: 'http://placeimg.com/640/480/nature',
  },
];

const resources = [
  {
    fieldName: 'location',
    title: 'Location',
    instances: [
      { id: 'Room 1', text: 'Room 1', color: indigo },
      { id: 'Room 2', text: 'Room 2', color: blue },
      { id: 'Room 3', text: 'Room 3', color: teal },
    ],
  },
  {
    fieldName: 'priority',
    title: 'Priority',
    instances: [
      { id: 1, text: 'High Priority', color: teal },
      { id: 2, text: 'Medium Priority', color: blue },
      { id: 3, text: 'Low Priority', color: indigo },
    ],
  },
];

const styles = ({ palette }: Theme) =>
  createStyles({
    appointment: {
      borderRadius: 0,
      borderBottom: 0,
    },
    highPriorityAppointment: {
      borderLeft: `4px solid ${teal[500]}`,
    },
    mediumPriorityAppointment: {
      borderLeft: `4px solid ${blue[500]}`,
    },
    lowPriorityAppointment: {
      borderLeft: `4px solid ${yellow[500]}`,
    },
    weekEndCell: {
      backgroundColor: fade(palette.action.disabledBackground, 0.04),
      '&:hover': {
        backgroundColor: fade(palette.action.disabledBackground, 0.04),
      },
      '&:focus': {
        backgroundColor: fade(palette.action.disabledBackground, 0.04),
      },
    },
    weekEndDayScaleCell: {
      backgroundColor: fade(palette.action.disabledBackground, 0.06),
    },
    text: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    content: {
      opacity: 0.7,
    },
    container: {
      width: '100%',
      lineHeight: 1.2,
      height: '100%',
    },
    commandButton: {
      backgroundColor: 'rgba(255,255,255,0.65)',
    },
    textCenter: {
      textAlign: 'center',
    },
    icon: {
      color: palette.action.active,
    },
  });

type AppointmentProps = Appointments.AppointmentProps & WithStyles<typeof styles>;
type AppointmentContentProps = Appointments.AppointmentContentProps & WithStyles<typeof styles>;
type TimeTableCellProps = MonthView.TimeTableCellProps & WithStyles<typeof styles>;
type DayScaleCellProps = MonthView.DayScaleCellProps & WithStyles<typeof styles>;
type ContentProps = AppointmentTooltip.ContentProps & WithStyles<typeof styles>;
type HeaderProps = AppointmentTooltip.HeaderProps & WithStyles<typeof styles>;
type CommandButtonProps = AppointmentTooltip.CommandButtonProps & WithStyles<typeof styles>;

const isWeekEnd = (date: Date): boolean => date.getDay() === 0 || date.getDay() === 6;

const DayScaleCell = withStyles(styles)(({ startDate, classes, ...restProps }: DayScaleCellProps) => (
  <MonthView.DayScaleCell
    className={classNames({
      [classes.weekEndDayScaleCell]: isWeekEnd(startDate),
    })}
    startDate={startDate}
    {...restProps}
  />
));

const TimeTableCell = withStyles(styles)(({ startDate, classes, ...restProps }: TimeTableCellProps) => (
  <MonthView.TimeTableCell
    className={classNames({
      [classes.weekEndCell]: isWeekEnd(startDate!),
    })}
    startDate={startDate}
    {...restProps}
  />
));

const Appointment = withStyles(styles)(({ classes, data, ...restProps }: AppointmentProps) => (
  <Appointments.Appointment
    {...restProps}
    className={classNames({
      [classes.highPriorityAppointment]: data.priority === 1,
      [classes.mediumPriorityAppointment]: data.priority === 2,
      [classes.lowPriorityAppointment]: data.priority === 3,
      [classes.appointment]: true,
    })}
    data={data}
  />
));

const AppointmentContent = withStyles(styles, { name: 'AppointmentContent' })(
  ({ classes, data, ...restProps }: AppointmentContentProps) => {
    let priority = 'low';
    if (data.priority === 2) priority = 'medium';
    if (data.priority === 3) priority = 'high';
    return (
      <Appointments.AppointmentContent {...restProps} data={data}>
        <div className={classes.container}>
          <div className={classes.text}>{data.title}</div>
          <div className={classNames(classes.text, classes.content)}>{`Advisor: ${data.advisor}`}</div>
          <div className={classNames(classes.text, classes.content)}>{`Priority: ${priority}`}</div>
          <div className={classNames(classes.text, classes.content)}>{`Location: ${data.location}`}</div>
        </div>
      </Appointments.AppointmentContent>
    );
  },
);

const Header = withStyles(styles, { name: 'Header' })(
  ({ children, appointmentData, classes, ...restProps }: HeaderProps) => (
    <AppointmentTooltip.Header
      {...restProps}
      style={{
        height: '260px',
        backgroundSize: 'cover',
        background: `url(${appointmentData?.bgUrl})`,
      }}
      appointmentData={appointmentData}
    >
      <IconButton onClick={() => alert(JSON.stringify(appointmentData))} className={classes.commandButton}>
        <MoreIcon />
      </IconButton>
    </AppointmentTooltip.Header>
  ),
);

const Content = withStyles(styles, { name: 'Content' })(({ appointmentData, classes, ...restProps }: ContentProps) => {
  return (
    <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
      <Grid container alignItems="center">
        <Grid item xs={2} className={classes.textCenter}>
          <People className={classes.icon} />
        </Grid>
        <Grid item xs={10}>
          <span>{appointmentData?.advisor}</span>
        </Grid>
      </Grid>
    </AppointmentTooltip.Content>
  );
});

const CommandButton = withStyles(styles, { name: 'CommandButton' })(({ classes, ...restProps }: CommandButtonProps) => (
  <AppointmentTooltip.CommandButton {...restProps} className={classes.commandButton} />
));

type viewNameType = 'work-week' | 'Week' | 'Month' | 'Day';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentViewName, setCurrentViewName] = useState<viewNameType>('Month');

  const onCurrentDateChange = (newDate: Date) => setCurrentDate(newDate);
  const onCurrentViewNameChange = (viewName: string) => setCurrentViewName(viewName as viewNameType);

  return (
    <div className="my-6 px-6 space-y-6">
      <h1 className="font-semibold text-2xl">Calendar</h1>
      <p className="font-semibold">Current date: {currentDate.toString()}</p>
      <p className="font-semibold">Current view: {currentViewName}</p>
      <div className="bg-gray-50 rounded-3xl border border-gray-200 text-janttNavyBlue p-6">
        <Paper>
          <Scheduler data={appointments}>
            <ViewState
              currentDate={currentDate}
              currentViewName={currentViewName}
              onCurrentDateChange={onCurrentDateChange}
              onCurrentViewNameChange={onCurrentViewNameChange}
            />

            <WeekView startDayHour={10} endDayHour={19} />
            <WeekView name="work-week" displayName="Work Week" excludedDays={[0, 6]} startDayHour={9} endDayHour={19} />
            <MonthView dayScaleCellComponent={DayScaleCell} timeTableCellComponent={TimeTableCell} />
            <DayView startDayHour={10} endDayHour={24} />

            <Appointments appointmentComponent={Appointment} appointmentContentComponent={AppointmentContent} />
            <Resources data={resources} />

            <AppointmentTooltip
              showCloseButton
              headerComponent={Header}
              contentComponent={Content}
              commandButtonComponent={CommandButton}
            />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <ViewSwitcher />
          </Scheduler>
        </Paper>
      </div>
    </div>
  );
};

export default Calendar;
