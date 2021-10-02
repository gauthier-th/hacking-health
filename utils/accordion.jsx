import Button from '@mui/material/Button'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function AccordionItem({ expanded, setExpanded, name, nextName, title, description, children }) {
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false)
    }
    return <Accordion expanded={expanded === name} onChange={handleChange(name)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        {title && <Typography sx={{ width: '80%', flexShrink: 0 }}>{title}</Typography>}
        {/* {description && <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>} */}
      </AccordionSummary>
      <AccordionDetails>
        {nextName && <div className="d-flex justify-content-center">
          <Button variant="outlined" className="mb-3" onClick={() => setExpanded(nextName)}>Passer la catégorie</Button>
        </div>}
        <Typography>
          {children}
        </Typography>
        {nextName && <div className="d-flex justify-content-center">
          <Button variant="outlined" className="mb-3" onClick={() => setExpanded(nextName)}>Suite</Button>
        </div>}
      </AccordionDetails>
    </Accordion>
  }