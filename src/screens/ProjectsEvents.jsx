import {
  Add,
  Cancel,
  ExpandMore,
  FilterList,
  GridView,
  IosShare,
  KeyboardArrowRight,
  Menu,
  Search,
} from "@mui/icons-material";
import {
  Grid,
  Typography,
  Box,
  Checkbox,
  InputBase,
  ToggleButtonGroup,
  ToggleButton,
  Chip,
  Divider,
  alpha,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  Stack,
  MenuItem,
  Tabs,
  Button,
  Tab,
  Avatar,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";

import ButtonCustom from "../components/ButtonCustom";
import EventCard from "../components/EventCard";
import EventsExpand from "../components/EventsExpand";
import InputFeildCustom from "../components/InputFeildCustom";

function ProjectsEvents() {
  const [viewType, setViewType] = useState("right");
  const [expand, setExpand] = useState(true);

  // Modal
  const [showModal, setShowModal] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const [tab, setTab] = React.useState(0);
  const [responsible, setResponsible] = useState([]);
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="h-100 ">
      <Dialog
        open={showModal}
        fullWidth={true}
        maxWidth={"sm"}
        onClose={toggleModal}
      >
        <DialogTitle>
          <Box className="d-flex align-items-start justify-content-between">
            <div>
              <Typography variant="h6" className="fw-bold">
                Add an Event
              </Typography>
              <Typography className="text-muted">
                Add event details here
              </Typography>
            </div>
            <IconButton onClick={toggleModal}>
              <Cancel />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent className="pt-2">
          <Stack direction={"column"} spacing={2}>
            <InputFeildCustom label="Title" fullWidth border />
            <InputFeildCustom select label="Type of Event" size="small" border>
              <MenuItem value={1}>Event 1</MenuItem>
            </InputFeildCustom>
            <InputFeildCustom select label="Event Status" size="small" border>
              <MenuItem value={1}>Status 1</MenuItem>
            </InputFeildCustom>
            <InputFeildCustom select label="Priority" size="small" border>
              <MenuItem value={1}>Priority 1</MenuItem>
            </InputFeildCustom>
            <InputFeildCustom select label="Impact" size="small" border>
              <MenuItem value={1}>Impact 1</MenuItem>
            </InputFeildCustom>
            <InputFeildCustom select label="Category" size="small" border>
              <MenuItem value={1}> Category 1</MenuItem>
            </InputFeildCustom>
            {viewMore ? (
              <>
                <InputFeildCustom label="Advancement" size="small" border />
                <InputFeildCustom
                  label="Technical Control"
                  size="small"
                  border
                />
                <InputFeildCustom
                  label="Internal Verification"
                  size="small"
                  border
                />
                <InputFeildCustom label="Quality Control" size="small" border />
                <InputFeildCustom label="Approval" size="small" border />
                <InputFeildCustom
                  label="Customer Reception"
                  size="small"
                  border
                />
                <InputFeildCustom label="Rating" size="small" border />
                <InputFeildCustom label="Human Resource" size="small" border />
                <InputFeildCustom label="Deadline" size="small" border />
                <InputFeildCustom label="Lag Cause" size="small" border />
                <InputFeildCustom
                  label="Points of attention"
                  size="small"
                  border
                />
              </>
            ) : (
              ""
            )}
            <div className="d-flex justify-content-end">
              <Typography
                color={"primary"}
                variant="caption"
                onClick={() => setViewMore(!viewMore)}
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                View {viewMore ? "Less" : "More"}
              </Typography>
            </div>
            <Box className="w-100">
              <Tabs value={tab} onChange={handleChange} variant="scrollable">
                <Tab label="Description" className="text-capitalize " />
                <Tab label="Attachments" className="text-capitalize " />
                <Tab label="Responsible" className="text-capitalize " />
                <Tab label="Due Date" className="text-capitalize " />
              </Tabs>
              <Divider
                className="m-0 p-0"
                sx={{
                  border: (theme) =>
                    `1px solid ${alpha(theme.palette.grey.light, 0.7)}`,
                  transform: "translateY(-2px)",
                }}
              />
              <Box className="p-2  mt-1" sx={{ minHeight: "150px" }}>
                {tab === 0 ? (
                  <InputFeildCustom
                    multiline
                    rows={4}
                    placeholder="Your description comes here"
                    fullWidth
                    border
                  />
                ) : tab === 1 ? (
                  <>
                    <Typography color={"grey"} variant="body2">
                      Attach Images
                    </Typography>
                    <Button
                      variant="outlined"
                      color="secondary"
                      component="label"
                      sx={{ padding: 0.3 }}
                    >
                      <Add />
                      <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <Typography color={"grey"} variant="body2" className="mt-3">
                      Attach Plans
                    </Typography>
                    <Button
                      variant="outlined"
                      color="secondary"
                      component="label"
                      sx={{ padding: 0.3 }}
                    >
                      <Add />
                      <input hidden accept="image/*" multiple type="file" />
                    </Button>
                  </>
                ) : tab === 2 ? (
                  <>
                    <InputFeildCustom select border fullWidth value={0}>
                      <MenuItem value={1}>
                        <div className="d-flex align-items-center justify-content-between w-100">
                          <div className="d-flex align-items-center justify-content-start">
                            <Avatar
                              src="https://media.istockphoto.com/id/1307791650/photo/headshot-portrait-of-smiling-caucasian-businessman-pose-at-workplace.jpg?b=1&s=612x612&w=0&k=20&c=q6k0LZjjB6KMntcZdmy_O6TWoEPa2uLounM9aRWOhRo="
                              sx={{ height: "30px", width: "30px" }}
                            />
                            <Typography variant="body2" className="ms-1">
                              Peter
                            </Typography>
                            <Typography variant="body2" className="mx-1">
                              -
                            </Typography>
                            <Typography variant="body2" color={"grey"}>
                              peter@gmail.com
                            </Typography>
                          </div>
                          {console.log(responsible)}
                          <Checkbox
                            checked={responsible.includes(1)}
                            onChange={() => {
                              if (responsible.includes(1)) {
                                // const index = responsible.findIndex(
                                //   (item, i) => item === 1
                                // );
                                setResponsible([]);
                                return;
                              }
                              setResponsible([...responsible, 1]);
                            }}
                          />
                        </div>
                      </MenuItem>
                    </InputFeildCustom>
                    {responsible.length ? (
                      <Chip
                        className="mt-3"
                        avatar={
                          <Avatar
                            src="https://media.istockphoto.com/id/1307791650/photo/headshot-portrait-of-smiling-caucasian-businessman-pose-at-workplace.jpg?b=1&s=612x612&w=0&k=20&c=q6k0LZjjB6KMntcZdmy_O6TWoEPa2uLounM9aRWOhRo="
                            sx={{ height: "30px", width: "30px" }}
                          />
                        }
                        label="Peter"
                        onDelete={() => setResponsible([])}
                      />
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  <InputFeildCustom type="date" border fullWidth />
                )}
              </Box>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <ButtonCustom
            label="cancel"
            textDark
            variant="outlined"
            color="secondary"
            sx={{ width: "100px" }}
            onClick={toggleModal}
          />
          <ButtonCustom
            label="Add"
            variant="contained"
            color="secondary"
            sx={{ width: "100px" }}
          />
        </DialogActions>
      </Dialog>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className="fw-bold">
            Project Name
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="d-flex justify-content-end align-items-center">
            <div className="d-flex align-items-center">
              <Typography variant="caption" className="me-2">
                View By
              </Typography>
              <ToggleButtonGroup size="small">
                <ToggleButton
                  value="left"
                  key="left"
                  sx={{ width: "66px" }}
                  className="text-capitalize"
                >
                  Progress
                </ToggleButton>
                <ToggleButton
                  value="right"
                  key="right"
                  sx={{ width: "70px" }}
                  className="text-capitalize"
                >
                  Type
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="d-flex align-items-center ms-2">
              <Typography variant="caption" className="me-2">
                View Type
              </Typography>

              <ToggleButtonGroup
                size="small"
                value={viewType}
                exclusive
                onChange={(e, value) => {
                  setViewType(value);
                }}
              >
                <ToggleButton
                  value="left"
                  className="text-capitalize"
                  sx={{ width: "50px" }}
                >
                  <Menu />
                </ToggleButton>
                <ToggleButton
                  value="right"
                  className="text-capitalize"
                  sx={{ width: "50px" }}
                >
                  <GridView />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="d-flex mb-2 mb-md-0 ">
            <Box
              className="w-100 p-2 d-flex align-items-center"
              sx={{
                boxShadow: "0px 0px 16px 2px rgba(0, 0, 0, 0.08)",
                backgroundColor: "white",
                borderRadius: "10px",
                maxWidth: "400px",
              }}
            >
              <Search color="grey" />
              <InputBase
                fullWidth
                className="ms-2"
                placeholder="Search project by name, city ...."
              />
            </Box>
            <ButtonCustom
              variant="contained"
              color="secondary"
              label={<FilterList />}
              className="ms-3"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="d-flex  justify-content-end ">
            <ButtonCustom
              variant="outlined"
              className="me-2"
              textDark
              color="secondary"
              label={
                <Typography className="d-flex align-items-center">
                  <IosShare fontSize="small" className="me-1" /> Export
                </Typography>
              }
            />
            <ButtonCustom
              variant="contained"
              color="secondary"
              onClick={toggleModal}
              label={
                <Typography className="d-flex align-items-center">
                  <Add className="me-1" /> Add Event
                </Typography>
              }
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          {viewType === "right" ? (
            <div
              className="d-flex flex-1 w-100 "
              style={{
                overflowX: "auto",
                height: "71vh",
                overflowY: "hidden",
              }}
            >
              <Box className="eventBox p-2 pt-0">
                <Box
                  sx={{
                    zIndex: 5,
                    position: "sticky",
                    top: 0,
                    background: (theme) => theme.palette.background.default,
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Typography variant="h5" className="fw-bold">
                        Problems
                      </Typography>
                      <Chip size="small" label="5" className="ms-1" />
                    </div>

                    <Add />
                  </div>
                  <Divider className="my-3" sx={{ border: "2px solid grey" }} />
                </Box>
                <div className="d-flex flex-column gap-3 ">
                  {Array(10)
                    .fill("0")
                    .map((_, i) => (
                      <EventCard key={"item-" + i} />
                    ))}
                  <ButtonCustom
                    sx={{
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.4),
                      height: "40px",
                      ":hover": {
                        background: (theme) =>
                          alpha(theme.palette.primary.main, 0.6),
                      },
                    }}
                    label={
                      <Typography className="d-flex align-items-center">
                        <Add className="me-1" /> Add Event
                      </Typography>
                    }
                    variant="contained"
                  />
                </div>
              </Box>
              <Box className="eventBox p-2 pt-0">
                <Box
                  sx={{
                    zIndex: 5,
                    position: "sticky",
                    top: 0,
                    background: (theme) => theme.palette.background.default,
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Typography variant="h5" className="fw-bold">
                        Risks
                      </Typography>
                      <Chip size="small" label="5" className="ms-1" />
                    </div>

                    <Add />
                  </div>
                  <Divider className="my-3" sx={{ border: "2px solid grey" }} />
                </Box>
                <div className="d-flex flex-column gap-3 ">
                  {Array(10)
                    .fill("0")
                    .map((_, i) => (
                      <EventCard key={"item-" + i} />
                    ))}
                  <ButtonCustom
                    sx={{
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.4),
                      height: "40px",
                      ":hover": {
                        background: (theme) =>
                          alpha(theme.palette.primary.main, 0.6),
                      },
                    }}
                    label={
                      <Typography className="d-flex align-items-center">
                        <Add className="me-1" /> Add Event
                      </Typography>
                    }
                    variant="contained"
                  />
                </div>
              </Box>
              <Box className="eventBox p-2 pt-0">
                <Box
                  sx={{
                    zIndex: 5,
                    position: "sticky",
                    top: 0,
                    background: (theme) => theme.palette.background.default,
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Typography variant="h5" className="fw-bold">
                        Changes
                      </Typography>
                      <Chip size="small" label="5" className="ms-1" />
                    </div>

                    <Add />
                  </div>
                  <Divider className="my-3" sx={{ border: "2px solid grey" }} />
                </Box>
                <div className="d-flex flex-column gap-3 ">
                  {Array(10)
                    .fill("0")
                    .map((_, i) => (
                      <EventCard key={"item-" + i} />
                    ))}
                  <ButtonCustom
                    sx={{
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.4),
                      height: "40px",
                      ":hover": {
                        background: (theme) =>
                          alpha(theme.palette.primary.main, 0.6),
                      },
                    }}
                    label={
                      <Typography className="d-flex align-items-center">
                        <Add className="me-1" /> Add Event
                      </Typography>
                    }
                    variant="contained"
                  />
                </div>
              </Box>
              <Box className="eventBox p-2 pt-0">
                <Box
                  sx={{
                    zIndex: 5,
                    position: "sticky",
                    top: 0,
                    background: (theme) => theme.palette.background.default,
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Typography variant="h5" className="fw-bold">
                        Topics
                      </Typography>
                      <Chip size="small" label="5" className="ms-1" />
                    </div>

                    <Add />
                  </div>
                  <Divider className="my-3" sx={{ border: "2px solid grey" }} />
                </Box>
                <div className="d-flex flex-column gap-3 ">
                  {Array(10)
                    .fill("0")
                    .map((_, i) => (
                      <EventCard key={"item-" + i} />
                    ))}
                  <ButtonCustom
                    sx={{
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.4),
                      height: "40px",
                      ":hover": {
                        background: (theme) =>
                          alpha(theme.palette.primary.main, 0.6),
                      },
                    }}
                    label={
                      <Typography className="d-flex align-items-center">
                        <Add className="me-1" /> Add Event
                      </Typography>
                    }
                    variant="contained"
                  />
                </div>
              </Box>
              <Box className="eventBox p-2 pt-0">
                <Box
                  sx={{
                    zIndex: 5,
                    position: "sticky",
                    top: 0,
                    background: (theme) => theme.palette.background.default,
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Typography variant="h5" className="fw-bold">
                        Tasks
                      </Typography>
                      <Chip size="small" label="5" className="ms-1" />
                    </div>

                    <Add />
                  </div>
                  <Divider className="my-3" sx={{ border: "2px solid grey" }} />
                </Box>
                <div className="d-flex flex-column gap-3 ">
                  {Array(10)
                    .fill("0")
                    .map((_, i) => (
                      <EventCard key={"item-" + i} />
                    ))}
                  <ButtonCustom
                    sx={{
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.4),
                      height: "40px",
                      ":hover": {
                        background: (theme) =>
                          alpha(theme.palette.primary.main, 0.6),
                      },
                    }}
                    label={
                      <Typography className="d-flex align-items-center">
                        <Add className="me-1" /> Add Event
                      </Typography>
                    }
                    variant="contained"
                  />
                </div>
              </Box>
              <Box className="eventBox p-2 pt-0">
                <Box
                  sx={{
                    zIndex: 5,
                    position: "sticky",
                    top: 0,
                    background: (theme) => theme.palette.background.default,
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Typography variant="h5" className="fw-bold">
                        Informations
                      </Typography>
                      <Chip size="small" label="5" className="ms-1" />
                    </div>

                    <Add />
                  </div>
                  <Divider className="my-3" sx={{ border: "2px solid grey" }} />
                </Box>
                <div className="d-flex flex-column gap-3 ">
                  {Array(10)
                    .fill("0")
                    .map((_, i) => (
                      <EventCard key={"item-" + i} />
                    ))}
                  <ButtonCustom
                    sx={{
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.4),
                      height: "40px",
                      ":hover": {
                        background: (theme) =>
                          alpha(theme.palette.primary.main, 0.6),
                      },
                    }}
                    label={
                      <Typography className="d-flex align-items-center">
                        <Add className="me-1" /> Add Event
                      </Typography>
                    }
                    variant="contained"
                  />
                </div>
              </Box>
              <Box className="eventBox p-2 pt-0">
                <Box
                  sx={{
                    zIndex: 5,
                    position: "sticky",
                    top: 0,
                    background: (theme) => theme.palette.background.default,
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Typography variant="h5" className="fw-bold">
                        Requirements
                      </Typography>
                      <Chip size="small" label="5" className="ms-1" />
                    </div>

                    <Add />
                  </div>
                  <Divider className="my-3" sx={{ border: "2px solid grey" }} />
                </Box>
                <div className="d-flex flex-column gap-3 ">
                  {Array(10)
                    .fill("0")
                    .map((_, i) => (
                      <EventCard key={"item-" + i} />
                    ))}
                  <ButtonCustom
                    sx={{
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.4),
                      height: "40px",
                      ":hover": {
                        background: (theme) =>
                          alpha(theme.palette.primary.main, 0.6),
                      },
                    }}
                    label={
                      <Typography className="d-flex align-items-center">
                        <Add className="me-1" /> Add Event
                      </Typography>
                    }
                    variant="contained"
                  />
                </div>
              </Box>
            </div>
          ) : (
            <div
              className=" w-100  "
              style={{
                overflowX: "auto",
                height: "71vh",
                overflowY: "auto",
              }}
            >
              <Box
                className="pb-2"
                sx={{
                  zIndex: 5,
                  position: "sticky",
                  top: 0,
                  background: (theme) => theme.palette.background.default,
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    className="fw-bold d-flex align-items-center"
                    sx={{ cursor: "pointer" }}
                    onClick={() => setExpand(!expand)}
                  >
                    {expand ? <ExpandMore /> : <KeyboardArrowRight />}
                    All Events
                  </Typography>
                </Box>
              </Box>
              <Box className=" p-2 pt-0 w-100 h-100">
                <>
                  <EventsExpand title={"Problems"} count="5" expand={expand} />
                  <EventsExpand title={"Tasks"} count="5" expand={expand} />
                  <EventsExpand title={"Risks"} count="5" expand={expand} />
                  <EventsExpand title={"Topics"} count="5" expand={expand} />
                  <EventsExpand title={"Change"} count="5" expand={expand} />
                  <EventsExpand
                    title={"Information"}
                    count="5"
                    expand={expand}
                  />
                  <EventsExpand
                    title={"Requirements"}
                    count="5"
                    expand={expand}
                  />
                </>
              </Box>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectsEvents;
