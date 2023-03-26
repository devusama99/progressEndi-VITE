import React from "react";
import { Add, FilterList, Search } from "@mui/icons-material";
import { Grid, Container, Typography, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import ButtonCustom from "../components/ButtonCustom";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={4} >
        <Grid item xs={12}>
          <Typography variant="h5" className="fw-bold">
            Current Projects
          </Typography>
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
          <div className="d-flex align-items-start justify-content-end">
            <ButtonCustom
              variant="contained"
              color="secondary"
              label={
                <Typography>
                  <Add className="me-1" /> Add Project
                </Typography>
              }
            />
          </div>
        </Grid>
        {Array(10)
          .fill("")
          .map((item, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={`item-${i}`}>
              <ProjectCard />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default Projects;
