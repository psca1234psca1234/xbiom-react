import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const TimeLines = ({contentList}) => {
    var ct=  contentList
    const timelineContentStyle = {
        // whiteSpace: 'nowrap', // Prevent word wrapping
        // overflow: 'hidden', // Hide overflowing text (if any)
        // textOverflow: 'ellipsis', // Show ellipsis for text that overflows
    };
      const timelineItemStyle = {
        marginBottom: '5px', // Adjust the space between TimelineItems
      };
    return (
        <Timeline style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          {contentList.map((content, index) => (
            <TimelineItem key={index} style={timelineItemStyle}>
              <TimelineSeparator>
                <TimelineDot />
                {index !== contentList.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent style={timelineContentStyle}>{content.CT}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      );
    };
    
    export default TimeLines;