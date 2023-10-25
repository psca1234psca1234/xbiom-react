import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PCWebixGrid } from "pcsharedlibrary";
import { Container, MainContainer } from "../resources/css/MainStyle";
import { gridData,columns } from "../resources/data/sampleGridDatas";

function AllStages() {
  const dummyConfig = {
    id: "webixContainer",
    data: gridData,
    columns: columns
  };

  return (
    <MainContainer>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>All Stages-1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>All Stages-2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>All Stages Grid.</Typography>
          <Container cntname={'as'}>
            <PCWebixGrid config={dummyConfig} />
          </Container>{" "}
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>All Stages-Disabled.</Typography>
        </AccordionSummary>
      </Accordion>
    </MainContainer>
  );
}

export default AllStages;
