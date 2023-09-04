import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { TextField, Autocomplete } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import { questions } from './questions';
import { ChartComponent } from './ChartComponent';
import BasicTable from './BasicTable';
import './App.css';

const realTimeDBString = 'https://dimitrichko-poll-default-rtdb.europe-west1.firebasedatabase.app/.json';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const App = () => {
  const [thanksMessage, setThanksMessage] = useState(false);
  const [seePoll, setSeePoll] = useState('poll');
  const [pollData, setPollData] = useState();
  const [graphData, setGraphData] = useState();
  const [questionnaire, setQuestionnaire] = useState({
    nickname: '',
      workInIT: '',
      company: '',
      companyCountry: '',
      position: '',
      seniority: '',
      satisfied: '',
      technologies: [],
      salary: '',
      timeInCompany: '',
  });

  useEffect(() => {
    fetch(realTimeDBString)
      .then((res) => res.json())
      .then((data) => {
        setPollData(data);
      });
  }, []);

  const handleSendPoll = () => {
    fetch(realTimeDBString, {
      method: 'POST',
      body: JSON.stringify(questionnaire),
    }).then((res) => {
      setThanksMessage(true);
    });
  };

  const handleClose = () => {
    setQuestionnaire({
      nickname: '',
      workInIT: '',
      company: '',
      companyCountry: '',
      position: '',
      seniority: '',
      satisfied: '',
      technologies: [],
      salary: '',
      timeInCompany: '',
    });
    setThanksMessage(false);
  };

  const handleChangePollGraph = (prop) => {
    let rawGraphData = Object.values(pollData).map((item) => item[prop]);
    let graphData = {};
    if (prop === 'workInIT') {
      graphData = {
        labels: questions.filter((item) => item.id === 1)[0].options.map((item) => item.name),
        datasets: [
          {
            label: questions.filter((item) => item.id === 1)[0].label,
            data: [
              rawGraphData.filter((item) => item.id === 1).length,
              rawGraphData.filter((item) => item.id === 2).length,
              rawGraphData.filter((item) => item.id === 3).length,
            ],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1,
          },
        ],
      };
    } else if (prop === 'companyCountry') {
      graphData = {
        labels: questions.filter((item) => item.id === 3)[0].options.map((item) => item.name),
        datasets: [
          {
            label: questions.filter((item) => item.id === 3)[0].label,
            data: [
              rawGraphData.filter((item) => item.id === 1).length,
              rawGraphData.filter((item) => item.id === 2).length,
              rawGraphData.filter((item) => item.id === 3).length,
              rawGraphData.filter((item) => item.id === 4).length,
              rawGraphData.filter((item) => item.id === 5).length,
            ],
            backgroundColor: [...new Set(rawGraphData)].map(
              (item) =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, 0.2)`
            ),
            borderColor: [...new Set(rawGraphData)].map(
              (item) =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, 1)`
            ),
            borderWidth: 1,
          },
        ],
      };
    } else if (prop === 'position') {
      graphData = {
        labels: questions.filter((item) => item.id === 4)[0].options.map((item) => item.name),
        datasets: [
          {
            label: questions.filter((item) => item.id === 4)[0].label,
            data: [
              rawGraphData.filter((item) => item.id === 1).length,
              rawGraphData.filter((item) => item.id === 2).length,
              rawGraphData.filter((item) => item.id === 3).length,
              rawGraphData.filter((item) => item.id === 4).length,
              rawGraphData.filter((item) => item.id === 5).length,
              rawGraphData.filter((item) => item.id === 6).length,
            ],
            backgroundColor: [...new Set(rawGraphData)].map(
              (item) =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, 0.2)`
            ),
            borderColor: [...new Set(rawGraphData)].map(
              (item) =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, 1)`
            ),
            borderWidth: 1,
          },
        ],
      };
    } else if (prop === 'seniority') {
      graphData = {
        labels: questions.filter((item) => item.id === 5)[0].options.map((item) => item.name),
        datasets: [
          {
            label: questions.filter((item) => item.id === 5)[0].label,
            data: [
              rawGraphData.filter((item) => item.id === 1).length,
              rawGraphData.filter((item) => item.id === 2).length,
              rawGraphData.filter((item) => item.id === 3).length,
              rawGraphData.filter((item) => item.id === 4).length,
              rawGraphData.filter((item) => item.id === 5).length,
              rawGraphData.filter((item) => item.id === 6).length,
            ],
            backgroundColor: [...new Set(rawGraphData)].map(
              (item) =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, 0.2)`
            ),
            borderColor: [...new Set(rawGraphData)].map(
              (item) =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, 1)`
            ),
            borderWidth: 1,
          },
        ],
      };
    } else if (prop === 'satisfied') {
      graphData = {
        labels: questions.filter((item) => item.id === 7)[0].options.map((item) => item.name),
        datasets: [
          {
            label: questions.filter((item) => item.id === 7)[0].label,
            data: [
              rawGraphData.filter((item) => item.id === 1).length,
              rawGraphData.filter((item) => item.id === 2).length,
              rawGraphData.filter((item) => item.id === 3).length,

            ],
            backgroundColor: [...new Set(rawGraphData)].map(
              (item) =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, 0.2)`
            ),
            borderColor: [...new Set(rawGraphData)].map(
              (item) =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, 1)`
            ),
            borderWidth: 1,
          },
        ],
      };
    } else if (prop === 'salary') {
      graphData = {
        labels: questions.filter((item) => item.id === 9)[0].options.map((item) => item.name),
        datasets: [
          {
            label: questions.filter((item) => item.id === 9)[0].label,
            data: [
              rawGraphData.filter((item) => item && item.id === 1).length,
              rawGraphData.filter((item) => item && item.id === 2).length,
              rawGraphData.filter((item) => item && item.id === 3).length,
              rawGraphData.filter((item) => item && item.id === 4).length,
              rawGraphData.filter((item) => item && item.id === 5).length,
              rawGraphData.filter((item) => item && item.id === 6).length,
            ],
            backgroundColor: [...new Set(rawGraphData)].map(
              (item) =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, 0.2)`
            ),
            borderColor: [...new Set(rawGraphData)].map(
              (item) =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, 1)`
            ),
            borderWidth: 1,
          },
        ],
      };
    } else if (prop === 'timeInCompany') {
      graphData = {
      labels: questions.filter((item) => item.id === 6)[0].options.map((item) => item.name),
        datasets: [
          {
            label: questions.filter((item) => item.id === 6)[0].label,
            data: [
              rawGraphData.filter((item) => item.id === 1).length,
              rawGraphData.filter((item) => item.id === 2).length,
              rawGraphData.filter((item) => item.id === 3).length,
            ],
            backgroundColor: [...new Set(rawGraphData)].map(
              (item) =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, 0.2)`
            ),
            borderColor: [...new Set(rawGraphData)].map(
              (item) =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, 1)`
            ),
            borderWidth: 1,
          },
        ],
      };
    } else if (prop === 'technologies') {
      let allTechnologies = [];
      rawGraphData.forEach((item) => {
        if (item) {
        allTechnologies = [...allTechnologies, ...item];}
      });
      graphData = {
        labels: [...new Set(allTechnologies.map((item) => item.name))],
        datasets: [
          {
            label: questions.filter((item) => item.id === 8)[0].label,
            data: [...new Set(allTechnologies.map((item) => item.name))].map(
              (item) => allTechnologies.filter((element) => element.name === item).length
            ),
            backgroundColor: [...new Set(allTechnologies.map((item) => item.name))].map(
              (item) =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, 0.2)`
            ),
            borderColor: [...new Set(allTechnologies.map((item) => item.name))].map(
              (item) =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, 1)`
            ),
            borderWidth: 1,
          },
        ],
      };
    }

    setGraphData(graphData);
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div className="header">
          <AppBar position="static">
            <Toolbar>
              <li onClick={() => setSeePoll('poll')} className="navBarElement">
                Poll Questions
              </li>
              <li onClick={() => setSeePoll('graphs')} className="navBarElement">
                Check Results
              </li>
              <li onClick={() => setSeePoll('people')} className="navBarElement">
                People
              </li>
            </Toolbar>
          </AppBar>
        </div>
        <div className="App">
          <Box width={'90%'} height={'90%'}>
            {seePoll ==='poll' && (
              <>
                <h1>#Dimitrichko poll</h1>
                <div className="questionsContainer">
                  {questions.map((question) => {
                    if (question.type === 'textField') {
                      return (
                        <div className="question">
                          <TextField
                            key={question.label}
                            sx={{ width: 400 }}
                            id="outlined-basic"
                            label={question.label}
                            variant="outlined"
                            value={questionnaire[question.abbreviation] || ''}
                            onChange={(e) => {
                              setQuestionnaire({ ...questionnaire, [question.abbreviation]: e.target.value });
                            }}
                          />
                        </div>
                      );
                    } else {
                      return (
                        <div className="question">
                          <Autocomplete
                            sx={{ width: 400 }}
                            key={question.label}
                            multiple={question.multiple}
                            id="combo-box-demo"
                            options={question.options}
                            isOptionEqualToValue={(option, value) => option.name === value.name}
                            getOptionLabel={(option) => option.name || ''}
                            renderInput={(params) => (
                              <TextField {...params} variant="outlined" label={question.label} />
                            )}
                            value={questionnaire[question.abbreviation] || ''}
                            onChange={(e, newValue) => {
                              setQuestionnaire({ ...questionnaire, [question.abbreviation]: newValue });
                            }}
                          />
                        </div>
                      );
                    }
                  })}
                </div>
                <Button variant="outlined" sx={{ width: '150px' }} onClick={handleSendPoll}>
                  Submit
                </Button>
              </>
            )}
            {seePoll==='graphs' && (
              <Box width={'100%'} height={'830px'}>
                <div className="graphMenu">
                  <li onClick={() => handleChangePollGraph('workInIT')} className="navBarElement">
                    Working in IT
                  </li>
                  <li onClick={() => handleChangePollGraph('companyCountry')} className="navBarElement">
                    Company Type
                  </li>
                  <li onClick={() => handleChangePollGraph('position')} className="navBarElement">
                    Position
                  </li>
                  <li onClick={() => handleChangePollGraph('seniority')} className="navBarElement">
                    Seniority
                  </li>
                  <li onClick={() => handleChangePollGraph('timeInCompany')} className="navBarElement">
                    Time in Company
                  </li>
                  <li onClick={() => handleChangePollGraph('technologies')} className="navBarElement">
                    Technologies
                  </li>
                  <li onClick={() => handleChangePollGraph('satisfied')} className="navBarElement">
                    Satisfied
                  </li>
                  <li onClick={() => handleChangePollGraph('salary')} className="navBarElement">
                    Salary
                  </li>
                </div>
                <div className="graphContainer">{graphData && <ChartComponent pollData={graphData} />}</div>
              </Box>
            )}
            {seePoll==='people' && (
              <Box width={'100%'} height={'830px'}>
                {pollData && <BasicTable people={Object.values(pollData)} />}
                </Box>
            )}
            

          </Box>
        </div>
        <Dialog
          sx={{ '& .MuiDialog-paper': { backgroundColor: '#19223F', width: '80%', maxHeight: 435 } }}
          open={thanksMessage}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{'Thank You'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Continue</Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </>
  );
};

export default App;
