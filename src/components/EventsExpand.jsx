import {
  Add,
  CalendarMonth,
  ExpandMore,
  KeyboardArrowRight,
  Warning,
} from "@mui/icons-material";
import { Avatar, AvatarGroup, Box, Chip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function EventsExpand({ title, count, expand }) {
  const [show, setExpand] = useState(expand);

  useEffect(() => {
    setExpand(expand);
  }, [expand]);
  return (
    <Box className="p-2 w-100 mb-3">
      <Typography
        className="fw-bold d-inline-block"
        sx={{ cursor: "pointer" }}
        onClick={() => setExpand(!show)}
      >
        {show ? <ExpandMore /> : <KeyboardArrowRight />} {title}
        <Chip
          size="small"
          label={count}
          sx={{ borderRadius: "5px" }}
          className="ms-2"
        />
      </Typography>
      {show ? (
        <>
          <Table responsive>
            <thead>
              <tr>
                <th style={{ minWidth: "350px" }}> </th>
                <th style={{ minWidth: "100px" }}>Status</th>
                <th style={{ minWidth: "150px" }}>Owner</th>
                <th style={{ minWidth: "100px" }}>Priority</th>
                <th style={{ minWidth: "150px" }}>Collaborators</th>
                <th style={{ minWidth: "100px" }}>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {Array(3)
                .fill(0)
                .map((item, i) => (
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Warning color="primary" />
                        <Typography className="ms-2">Title of event</Typography>
                      </div>
                    </td>
                    <td>
                      <Chip
                        size="small"
                        label="Event Status"
                        color="warning"
                        sx={{ borderRadius: "5px" }}
                      />
                    </td>
                    <td>
                      <Box className="d-flex align-items-center">
                        <Avatar src="" />
                        <Typography className="ms-2">Muhammad Usama</Typography>
                      </Box>
                    </td>
                    <td>
                      <Chip
                        size="small"
                        label="Priority"
                        color="warning"
                        sx={{ borderRadius: "5px" }}
                      />
                    </td>
                    <td>
                      <div className="d-flex">
                        <AvatarGroup
                          max={4}
                          componentsProps={{
                            additionalAvatar: {
                              sx: {
                                height: 30,
                                width: 30,
                                fontSize: "12px",
                              },
                            },
                          }}
                        >
                          <Avatar
                            sx={{ height: 30, width: 30 }}
                            src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
                          ></Avatar>
                          <Avatar
                            sx={{ height: 30, width: 30 }}
                            src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
                          ></Avatar>
                          <Avatar
                            sx={{ height: 30, width: 30 }}
                            src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
                          ></Avatar>
                          <Avatar
                            sx={{ height: 30, width: 30 }}
                            src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
                          ></Avatar>
                          <Avatar
                            sx={{ height: 30, width: 30 }}
                            src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
                          ></Avatar>
                          <Avatar
                            sx={{ height: 30, width: 30 }}
                            src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
                          ></Avatar>
                        </AvatarGroup>
                      </div>
                    </td>
                    <td>
                      <Typography className="d-flex align-items-center">
                        21 June
                        <CalendarMonth
                          className="ms-2"
                          color="grey"
                          fontSize="small"
                        />
                      </Typography>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Typography
            color={"primary"}
            sx={{ cursor: "pointer" }}
            className="ms-1"
          >
            <Add className="me-1" fontSize="small" />
            Add Tasks
          </Typography>
        </>
      ) : (
        ""
      )}
    </Box>
  );
}

export default EventsExpand;
