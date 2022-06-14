import { Accordion, AccordionSummary,AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AcordionDetailsContent from './details'
import DetailsNew from './detailsNew'
import { getSingleUser } from '../../../apis/users'

const LocksAcordion = (props) => {

    return (
        <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{background: 'rgba(145, 158, 171, 0.12)'}}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {props.door.name}
          </Typography>
         
         
        </AccordionSummary>
        
        <AccordionDetails>
          {/*   <AcordionDetailsContent lock={props.door} /> */}
            <DetailsNew lock={props.door} />
        </AccordionDetails>
      </Accordion>
    )
}

export default LocksAcordion