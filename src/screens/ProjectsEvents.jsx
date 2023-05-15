import {
  Add,
  AttachFile,
  Cancel,
  Circle,
  Close,
  Downloading,
  ExpandMore,
  FilterList,
  GridView,
  IosShare,
  KeyboardArrowRight,
  Menu,
  PinDrop,
  Search,
  Send,
  Title,
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Popover,
} from "@mui/material";
import React, { useRef, useState } from "react";

import ButtonCustom from "../components/ButtonCustom";
import EventCard from "../components/EventCard";
import EventsExpand from "../components/EventsExpand";
import InputFeildCustom from "../components/InputFeildCustom";
import ProgressIcon from "../assets/progress_icon.png";
import TypeIcon from "../assets/type_icon.png";

function ProjectsEvents() {
  const importXls = useRef();
  const [viewType, setViewType] = useState("right");
  const [viewBy, setViewBy] = useState("right");
  const [expand, setExpand] = useState(true);

  // Modal
  const [showModal, setShowModal] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const [tab, setTab] = React.useState(0);
  const [eventModalTab, setEventModalTab] = React.useState(0);
  const [responsible, setResponsible] = useState([]);
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  // EventModalTabs
  const handleEventModalTab = (event, newValue) => {
    setEventModalTab(newValue);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // EventModal
  const [eventModal, setEventModal] = useState(false);
  const [details, setDetails] = useState(true);
  const toggleEventModal = () => {
    setEventModal(!eventModal);
    setDetails(true);
  };

  // Filter
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <div className="h-100  ">
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
            <InputFeildCustom select label="Class" size="small" border>
              <MenuItem value={1}> Class 1</MenuItem>
            </InputFeildCustom>
            <InputFeildCustom select label="Package" size="small" border>
              <MenuItem value={1}> Package 1</MenuItem>
            </InputFeildCustom>
            <InputFeildCustom
              size="small"
              border
              type="date"
              label="Start Date"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <InputFeildCustom
              label="End Date"
              size="small"
              border
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />

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
                onClick={() => importXls.current.click()}
                className="pe-2"
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Import
                <input type={"file"} hidden ref={importXls} />
              </Typography>
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

      <Dialog
        open={eventModal}
        maxWidth="md"
        fullWidth={true}
        onClose={toggleEventModal}
      >
        <Box className="d-flex flex-column flex-md-row eventModalBox">
          <Box className="bg-primary h-100 w-30 order-2 order-md-1">
            <Box className="p-3 d-flex flex-column gap-2 h-100">
              <Accordion disableGutters elevation={0} defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMore color="light" />}
                  sx={{
                    backgroundColor: (theme) => theme.palette.secondary.main,
                    color: (theme) => theme.palette.light.main,
                  }}
                >
                  Location
                </AccordionSummary>
                <AccordionDetails
                  className="d-flex justify-content-center"
                  sx={{ overflow: "hidden" }}
                >
                  <img
                    src="https://wpmedia.roomsketcher.com/content/uploads/2022/01/06145940/What-is-a-floor-plan-with-dimensions.png"
                    alt="event-location"
                    height={"180px"}
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={details}
                disableGutters
                elevation={0}
                onChange={() => {
                  setDetails(!details);
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore color="light" />}
                  sx={{
                    backgroundColor: (theme) => theme.palette.secondary.main,
                    color: (theme) => theme.palette.light.main,
                  }}
                >
                  Details
                </AccordionSummary>
              </Accordion>
              {details ? (
                <Box className="eventModalDetailsBox">
                  {[
                    "Status",
                    "Creation Date",
                    "Creator",
                    "ID",
                    "Priority",
                    "Work Package",
                    "Type of Event",
                    "Impact",
                    "Ranking",
                    "Related Events",
                    "Advancement",
                    "Technical Control",
                    "Internal Verification",
                    "Quality Control",
                    "Rating",
                    "End Date",
                    "Deadline",
                    "Duration",
                    "Lag Cause",
                  ].map((item, i) => (
                    <Accordion
                      key={"info-" + i}
                      elevation={0}
                      defaultExpanded={details}
                      disableGutters
                      square
                      sx={{
                        p: 0,
                        m: 0,
                        backgroundColor: "transparent",
                        borderBottom: "1px solid rgba(0,0,0,0.2)",
                        "&.MuiAccordion-root": {
                          // height: 40,
                          m: 0,
                          p: 0,
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        sx={{ fontSize: "14px" }}
                      >
                        {item}
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="caption">{item}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              ) : null}
            </Box>
          </Box>
          <Box
            className="h-100  order-1 order-md-2 w-70 p-3"
            sx={{ overflow: "auto" }}
          >
            <div className="d-flex justify-content-between px-2">
              <div className="d-flex align-items-center">
                <PinDrop fontSize="large" color="primary" />
                <Typography variant="h5" className="fw-bold">
                  Event Title
                </Typography>
              </div>
              <IconButton onClick={toggleEventModal}>
                <Close />
              </IconButton>
            </div>

            <Accordion
              disableGutters
              elevation={0}
              className="mt-3"
              sx={{
                backgroundColor: (theme) => theme.palette.secondary.main,
                color: (theme) => theme.palette.light.main,
              }}
            >
              <AccordionSummary expandIcon={<ExpandMore color="light" />}>
                Description
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "white",
                  color: (theme) => theme.palette.grey.dark,
                }}
              >
                <Typography sx={{ fontSize: "12px" }} className="mt-2 px-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate inventore, amet necessitatibus fugit aliquid neque
                  reiciendis modi qui tenetur dolore, minima corporis optio
                  laudantium a quos labore sint officiis officia dolorem
                  quaerat. Excepturi unde culpa amet cumque veniam saepe quaerat
                  iste, impedit facere delectus, repellat molestias. Quis ipsa
                  laborum, alias reiciendis eligendi facere voluptas ab. Sequi
                  deserunt sapiente aliquid nisi eum in, adipisci, officia
                  vitae, laudantium aspernatur possimus commodi. Repellendus
                  odio temporibus culpa dolore eveniet harum aperiam, cum vel
                  voluptas sunt nam eum, repellat in ducimus omnis hic! Iure id
                  iste ea dignissimos vel veniam eaque
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Tabs
              value={eventModalTab}
              onChange={handleEventModalTab}
              variant="scrollable"
            >
              <Tab label="Comments" className="text-capitalize " />
              <Tab label="Attachments" className="text-capitalize " />
            </Tabs>
            <Divider
              sx={{
                borderColor: (theme) => theme.palette.primary.main,
              }}
              className="mb-3"
            />

            {eventModalTab ? (
              <>
                <div className="d-flex justify-content-center gap-2 flex-wrap">
                  <img
                    src="https://media.istockphoto.com/id/981344368/photo/silhouette-of-engineer-and-construction-team-working-at-site-over-blurred-background-sunset.jpg?s=612x612&w=0&k=20&c=x7MIYaIxnLUKhKrh-GqwrjZpB_aBJu9M4pbcX2zDHVw="
                    alt=""
                    style={{
                      height: 100,
                      width: 120,
                      borderRadius: 10,
                    }}
                  />
                  <img
                    src="https://media.istockphoto.com/id/981344368/photo/silhouette-of-engineer-and-construction-team-working-at-site-over-blurred-background-sunset.jpg?s=612x612&w=0&k=20&c=x7MIYaIxnLUKhKrh-GqwrjZpB_aBJu9M4pbcX2zDHVw="
                    alt=""
                    style={{
                      height: 100,
                      width: 120,
                      borderRadius: 10,
                    }}
                  />
                  <img
                    src="https://media.istockphoto.com/id/981344368/photo/silhouette-of-engineer-and-construction-team-working-at-site-over-blurred-background-sunset.jpg?s=612x612&w=0&k=20&c=x7MIYaIxnLUKhKrh-GqwrjZpB_aBJu9M4pbcX2zDHVw="
                    alt=""
                    style={{
                      height: 100,
                      width: 120,
                      borderRadius: 10,
                    }}
                  />
                  <img
                    src="https://media.istockphoto.com/id/981344368/photo/silhouette-of-engineer-and-construction-team-working-at-site-over-blurred-background-sunset.jpg?s=612x612&w=0&k=20&c=x7MIYaIxnLUKhKrh-GqwrjZpB_aBJu9M4pbcX2zDHVw="
                    alt=""
                    style={{
                      height: 100,
                      width: 120,
                      borderRadius: 10,
                    }}
                  />
                </div>
              </>
            ) : (
              <>
                <Box className="d-flex align-items-center mb-4">
                  <Avatar
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kyeCS-Zb0GCZxuDffniY0NJQ1GCIW2T0FKEMkdEXnXCnQLD435M9HF47cpS3yPj-Sm8&usqp=CAU"
                    sx={{ width: "30px", height: "30px" }}
                  />
                  <Box
                    className="d-flex align-items-center flex-1 ms-2"
                    sx={{
                      bgcolor: (theme) => alpha(theme.palette.grey.dark, 0.04),
                      borderRadius: 1.3,
                    }}
                  >
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                    >
                      <input hidden accept="image/*" type="file" />
                      <AttachFile />
                    </IconButton>
                    <InputBase
                      className="mx-1 flex-1"
                      placeholder="Comment Here"
                      fullWidth
                    />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                    >
                      <Send />
                    </IconButton>
                  </Box>
                </Box>
                <Box>
                  {[
                    {
                      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fuga dignissimos doloribus laudantium. Nesciunt modi sapiente, fuga molestiae doloremque corrupti ",
                      date: "4 March 2020",
                      time: "10:20 pm",
                      name: "Salman",
                      avatar:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kyeCS-Zb0GCZxuDffniY0NJQ1GCIW2T0FKEMkdEXnXCnQLD435M9HF47cpS3yPj-Sm8&usqp=CAU",
                      attachments: [
                        "https://media.istockphoto.com/id/981344368/photo/silhouette-of-engineer-and-construction-team-working-at-site-over-blurred-background-sunset.jpg?s=612x612&w=0&k=20&c=x7MIYaIxnLUKhKrh-GqwrjZpB_aBJu9M4pbcX2zDHVw=",
                        "https://media.istockphoto.com/id/981344368/photo/silhouette-of-engineer-and-construction-team-working-at-site-over-blurred-background-sunset.jpg?s=612x612&w=0&k=20&c=x7MIYaIxnLUKhKrh-GqwrjZpB_aBJu9M4pbcX2zDHVw=",
                      ],
                    },
                    {
                      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fuga dignissimos doloribus laudantium. Nesciunt modi sapiente, fuga molestiae doloremque corrupti ",
                      date: "4 March 2020",
                      time: "10:20 pm",
                      name: "Salman",
                      avatar:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kyeCS-Zb0GCZxuDffniY0NJQ1GCIW2T0FKEMkdEXnXCnQLD435M9HF47cpS3yPj-Sm8&usqp=CAU",
                      attachments: [],
                    },
                    {
                      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fuga dignissimos doloribus laudantium. Nesciunt modi sapiente, fuga molestiae doloremque corrupti ",
                      date: "4 March 2020",
                      time: "10:20 pm",
                      name: "Salman",
                      avatar:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kyeCS-Zb0GCZxuDffniY0NJQ1GCIW2T0FKEMkdEXnXCnQLD435M9HF47cpS3yPj-Sm8&usqp=CAU",
                      attachments: [
                        "https://media.istockphoto.com/id/981344368/photo/silhouette-of-engineer-and-construction-team-working-at-site-over-blurred-background-sunset.jpg?s=612x612&w=0&k=20&c=x7MIYaIxnLUKhKrh-GqwrjZpB_aBJu9M4pbcX2zDHVw=",
                        "https://media.istockphoto.com/id/981344368/photo/silhouette-of-engineer-and-construction-team-working-at-site-over-blurred-background-sunset.jpg?s=612x612&w=0&k=20&c=x7MIYaIxnLUKhKrh-GqwrjZpB_aBJu9M4pbcX2zDHVw=",
                      ],
                    },
                  ].map((item, i) => (
                    <Box className="d-flex py-2" key={"Chat-item" + i}>
                      <Avatar
                        src={item.avatar}
                        sx={{ height: "30px", width: "30px" }}
                        className="me-2"
                      />
                      <div>
                        <div className="flex-1 d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <Typography className="fw-bold">
                              {item.name}
                            </Typography>
                          </div>
                          <div className="d-flex flex-column align-items-end">
                            <Typography
                              className="text-muted"
                              sx={{ fontSize: "12px" }}
                            >
                              {item.date}
                            </Typography>
                            <Typography
                              sx={{ fontSize: "10px" }}
                              className="text-muted"
                            >
                              {item.time}
                            </Typography>
                          </div>
                        </div>
                        <Typography sx={{ fontSize: "14px" }}>
                          {item.text}
                        </Typography>
                        <div className="d-flex align-items-center gap-2 mt-1">
                          {item.attachments.length
                            ? item.attachments.map((attachment, i) => (
                                <img
                                  src={attachment}
                                  key={"attachment" + i}
                                  height="100px"
                                  width="100px"
                                  style={{ borderRadius: 5 }}
                                />
                              ))
                            : ""}
                        </div>
                      </div>
                    </Box>
                  ))}
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Dialog>
      <Grid container spacing={3}>
        <Grid item xs={6} md={12}>
          <Typography variant="h5" className="fw-bold">
            Project Name
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="d-flex mb-2 mb-md-0 ">
            <Box
              className="w-100 px-2 d-flex align-items-center"
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
                placeholder="Search project by event ...."
              />
            </Box>
            <ButtonCustom
              variant="contained"
              color="secondary"
              label={<FilterList />}
              className="ms-3"
              onClick={handleClick}
            />
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              elevation={1}
            >
              <Box className="p-3 border">
                <div
                  className="d-flex flex-column flex-md-row align-items-center justify-content-between"
                  style={{ minWidth: "300px" }}
                >
                  <Typography>Filters</Typography>
                  <IconButton onClick={handleClose}>
                    <Cancel />
                  </IconButton>
                </div>
                <Divider className="w-100 mb-2" />
                <Stack spacing={2}>
                  <div className="d-flex align-items-center">
                    <Typography sx={{ fontSize: "12px" }} className="w-50">
                      Type Of Event
                    </Typography>
                    <InputFeildCustom
                      select
                      color="secondary"
                      textDark
                      value={1}
                      border
                      className="ms-3"
                      fullWidth
                    >
                      <MenuItem value={1}>All</MenuItem>
                      <MenuItem value={2}>Filter 1</MenuItem>
                      <MenuItem value={3}>Filter 2</MenuItem>
                      <MenuItem value={4}>Filter 3</MenuItem>
                    </InputFeildCustom>
                  </div>
                  <div className="d-flex align-items-center">
                    <Typography sx={{ fontSize: "12px" }} className="w-50">
                      Event Status
                    </Typography>
                    <InputFeildCustom
                      select
                      color="secondary"
                      textDark
                      value={1}
                      border
                      className="ms-3"
                      fullWidth
                    >
                      <MenuItem value={1}>All</MenuItem>
                      <MenuItem value={2}>Filter 1</MenuItem>
                      <MenuItem value={2}>Filter 1</MenuItem>
                      <MenuItem value={3}>Filter 2</MenuItem>
                      <MenuItem value={4}>Filter 3</MenuItem>
                    </InputFeildCustom>
                  </div>
                  <div className="d-flex align-items-center">
                    <Typography sx={{ fontSize: "12px" }} className="w-50">
                      Priority
                    </Typography>
                    <InputFeildCustom
                      select
                      color="secondary"
                      textDark
                      value={1}
                      border
                      className="ms-3"
                      fullWidth
                    >
                      <MenuItem value={1}>All</MenuItem>
                      <MenuItem value={2}>Filter 1</MenuItem>
                      <MenuItem value={2}>Filter 1</MenuItem>
                      <MenuItem value={3}>Filter 2</MenuItem>
                      <MenuItem value={4}>Filter 3</MenuItem>
                    </InputFeildCustom>
                  </div>
                  <div className="d-flex align-items-center">
                    <Typography sx={{ fontSize: "12px" }} className="w-50">
                      Impact
                    </Typography>
                    <InputFeildCustom
                      select
                      color="secondary"
                      textDark
                      value={1}
                      border
                      className="ms-3"
                      fullWidth
                    >
                      <MenuItem value={1}>All</MenuItem>
                      <MenuItem value={2}>Filter 1</MenuItem>
                      <MenuItem value={2}>Filter 1</MenuItem>
                      <MenuItem value={3}>Filter 2</MenuItem>
                      <MenuItem value={4}>Filter 3</MenuItem>
                    </InputFeildCustom>
                  </div>
                  <div className="d-flex align-items-center">
                    <Typography sx={{ fontSize: "12px" }} className="w-50">
                      Work Category
                    </Typography>
                    <InputFeildCustom
                      select
                      color="secondary"
                      textDark
                      value={1}
                      border
                      className="ms-3"
                      fullWidth
                    >
                      <MenuItem value={1}>All</MenuItem>
                      <MenuItem value={2}>Filter 1</MenuItem>
                      <MenuItem value={2}>Filter 1</MenuItem>
                      <MenuItem value={3}>Filter 2</MenuItem>
                      <MenuItem value={4}>Filter 3</MenuItem>
                    </InputFeildCustom>
                  </div>
                </Stack>
              </Box>
            </Popover>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="d-flex flex-row align-items-center justify-content-between justify-content-sm-end "
        >
          <div className="d-flex justify-content-end align-items-center me-3 d-md-flex">
            <div className="d-flex align-items-center d-md-none">
              <Typography variant="caption" className="me-2 d-none d-md-block">
                View By
              </Typography>
              <ToggleButtonGroup
                size="small"
                value={viewBy}
                exclusive
                onChange={(e, nextVal) => {
                  setViewBy(nextVal);
                }}
              >
                <ToggleButton
                  value="left"
                  key="left"
                  className="text-capitalize "
                  sx={{ width: "40px" }}
                >
                  <img src={TypeIcon} alt="type-icon" height={20} />
                </ToggleButton>
                <ToggleButton
                  value="right"
                  key="right"
                  className="text-capitalize"
                  sx={{ width: "40px" }}
                >
                  <img src={ProgressIcon} alt="progress-icon" height={20} />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="d-flex align-items-center d-none d-md-flex">
              <Typography variant="caption" className="me-2 d-none d-md-block">
                View By
              </Typography>
              <ToggleButtonGroup
                size="small"
                value={viewBy}
                exclusive
                onChange={(e, nextVal) => {
                  setViewBy(nextVal);
                }}
              >
                <ToggleButton
                  value="left"
                  key="left"
                  className="text-capitalize"
                  sx={{ width: "40px" }}
                >
                  <img src={TypeIcon} alt="type-icon" height={20} />
                </ToggleButton>
                <ToggleButton
                  value="right"
                  key="right"
                  className="text-capitalize "
                  sx={{ width: "40px" }}
                >
                  <img src={ProgressIcon} alt="progress-icon" height={20} />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="d-flex justify-content-between align-items-center  d-none d-md-flex">
              <div className="d-flex align-items-center ms-2">
                <Typography sx={{ fontSize: "10px" }} className="me-2">
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
          </div>
          <div className="d-flex justify-content-between align-items-center me-3 d-md-none">
            <div className="d-flex align-items-center ms-2">
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
          <div className="d-flex  justify-content-end ">
            <ButtonCustom
              variant="outlined"
              className="me-2"
              textDark
              color="secondary"
              label={
                <Typography className="d-flex align-items-center">
                  <IosShare fontSize="small" />
                </Typography>
              }
            />
            <ButtonCustom
              variant="contained"
              color="secondary"
              onClick={toggleModal}
              label={
                <Typography className="d-flex align-items-center">
                  <Add />
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
                height: "70vh",
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
                        {viewBy === "left" ? "Problems" : "Validated"}
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
                      <div onClick={toggleEventModal} key={"item-" + i}>
                        <EventCard />
                      </div>
                    ))}
                  <ButtonCustom
                    sx={{
                      height: "40px",
                      color: (theme) => theme.palette.primary.main,
                    }}
                    label={
                      <Typography className="d-flex align-items-center">
                        <Add className="me-1" /> Add Event
                      </Typography>
                    }
                    variant="outlined"
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
                        {viewBy === "left" ? "Risks" : "Not Started"}
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
                      <div onClick={toggleEventModal} key={"item-" + i}>
                        <EventCard />
                      </div>
                    ))}
                  <ButtonCustom
                    sx={{
                      height: "40px",
                      color: (theme) => theme.palette.primary.main,
                    }}
                    label={
                      <Typography className="d-flex align-items-center">
                        <Add className="me-1" /> Add Event
                      </Typography>
                    }
                    variant="outlined"
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
                        {viewBy === "left" ? "Changes" : "Finished"}
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
                      <div onClick={toggleEventModal} key={"item-" + i}>
                        <EventCard />
                      </div>
                    ))}
                  <ButtonCustom
                    sx={{
                      height: "40px",
                      color: (theme) => theme.palette.primary.main,
                    }}
                    label={
                      <Typography className="d-flex align-items-center">
                        <Add className="me-1" /> Add Event
                      </Typography>
                    }
                    variant="outlined"
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
                        {viewBy === "left" ? "Topics" : "In Progress "}
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
                      <div onClick={toggleEventModal} key={"item-" + i}>
                        <EventCard />
                      </div>
                    ))}
                  <ButtonCustom
                    sx={{
                      height: "40px",
                      color: (theme) => theme.palette.primary.main,
                    }}
                    label={
                      <Typography className="d-flex align-items-center">
                        <Add className="me-1" /> Add Event
                      </Typography>
                    }
                    variant="outlined"
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
                        {viewBy === "left" ? "Tasks" : "Not Validated"}
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
                      <div onClick={toggleEventModal} key={"item-" + i}>
                        <EventCard />
                      </div>
                    ))}
                  <ButtonCustom
                    sx={{
                      height: "40px",
                      color: (theme) => theme.palette.primary.main,
                    }}
                    label={
                      <Typography className="d-flex align-items-center">
                        <Add className="me-1" /> Add Event
                      </Typography>
                    }
                    variant="outlined"
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
                        {viewBy === "left" ? "Information" : "Refused"}
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
                      <div onClick={toggleEventModal} key={"item-" + i}>
                        <EventCard />
                      </div>
                    ))}
                  <ButtonCustom
                    sx={{
                      height: "40px",
                      color: (theme) => theme.palette.primary.main,
                    }}
                    label={
                      <Typography className="d-flex align-items-center">
                        <Add className="me-1" /> Add Event
                      </Typography>
                    }
                    variant="outlined"
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
                      <div onClick={toggleEventModal} key={"item-" + i}>
                        <EventCard />
                      </div>
                    ))}
                  <ButtonCustom
                    sx={{
                      height: "40px",
                      color: (theme) => theme.palette.primary.main,
                    }}
                    label={
                      <Typography className="d-flex align-items-center">
                        <Add className="me-1" /> Add Event
                      </Typography>
                    }
                    variant="outlined"
                  />
                </div>
              </Box>
            </div>
          ) : (
            <div
              // className=" w-100  "
              style={
                {
                  // overflowX: "auto",
                  // height: "71vh",
                  // overflowY: "auto",
                }
              }
            >
              <Box
                className="pb-2"
                sx={{
                  zIndex: 5,
                  // position: "sticky",
                  // top: 0,
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
                  <EventsExpand
                    title={viewBy === "left" ? "Problems" : "Validated"}
                    count="5"
                    expand={expand}
                    onClick={toggleEventModal}
                  />
                  <EventsExpand
                    title={viewBy === "left" ? "Tasks" : "Not Started"}
                    count="5"
                    expand={expand}
                    onClick={toggleEventModal}
                  />
                  <EventsExpand
                    title={viewBy === "left" ? "Risks" : "Finished"}
                    count="5"
                    expand={expand}
                    onClick={toggleEventModal}
                  />
                  <EventsExpand
                    title={viewBy === "left" ? "Topics" : "In Progress"}
                    count="5"
                    expand={expand}
                    onClick={toggleEventModal}
                  />
                  <EventsExpand
                    title={viewBy === "left" ? "Change" : "Not Validated"}
                    count="5"
                    expand={expand}
                    onClick={toggleEventModal}
                  />
                  <EventsExpand
                    title={viewBy === "left" ? "Information" : "Refused"}
                    count="5"
                    expand={expand}
                    onClick={toggleEventModal}
                  />
                  <EventsExpand
                    title={"Requirements"}
                    count="5"
                    expand={expand}
                    onClick={toggleEventModal}
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
