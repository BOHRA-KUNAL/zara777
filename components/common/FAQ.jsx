import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import styles from "../../styles/Home2.module.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';


export default function FAQ() {
  return (
    <div>

<div className={styles.section_container}>
          <div className={styles.section_heading}>
            <h2>MORE QUESTIONS?</h2>
          </div>

          <div className={styles.section_sub_heading}>
            <h2>Here are our FAQ’s</h2>
          </div>

          
          </div>



      <Accordion style={{borderRadius: "8px"}}>
        <AccordionSummary
          expandIcon={<ExpandCircleDownIcon style={{color: "#fff"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='p-3'
        >
          <Typography style={{fontWeight: "800"}}>1. What is Zara777?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Zara777 is an online platform for matka play, offering a variety of matka markets with 24/7 automated deposit and withdrawal services for a seamless gaming experience.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{borderRadius: "8px"}}>
        <AccordionSummary
          expandIcon={<ExpandCircleDownIcon style={{color: "#fff"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
          className='p-3'
        >
          <Typography style={{fontWeight: "800"}}>2. How do I get started with matka play on Zara777?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: "#fff"}}>
          Simply sign up on our website, fund your account through our secure payment options, and select your preferred matka market to start playing.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{borderRadius: "8px"}}>
        <AccordionSummary
          expandIcon={<ExpandCircleDownIcon style={{color: "#fff"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
          className='p-3'
        >
          <Typography style={{fontWeight: "800"}}>3. What types of matka markets are available on Zara777?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: "#fff"}}>
          Zara777 provides access to all popular matka markets, allowing users to choose the games they know and love.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{borderRadius: "8px"}}>
        <AccordionSummary
          expandIcon={<ExpandCircleDownIcon style={{color: "#fff"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
          className='p-3'
        >
          <Typography style={{fontWeight: "800"}}>4. Is it safe to deposit and withdraw money on Zara777?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: "#fff"}}>
          Yes, Zara777 prioritizes user safety with secure payment gateways and 24/7 automated deposits and withdrawals, ensuring fast and safe transactions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{borderRadius: "8px"}}>
        <AccordionSummary
          expandIcon={<ExpandCircleDownIcon style={{color: "#fff"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
          className='p-3'
        >
          <Typography style={{fontWeight: "800"}}>5. How fast are deposits and withdrawals processed?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: "#fff"}}>
          All deposits and withdrawals are processed instantly, thanks to our automated system available around the clock.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{borderRadius: "8px"}}>
        <AccordionSummary
          expandIcon={<ExpandCircleDownIcon style={{color: "#fff"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
          className='p-3'
        >
          <Typography style={{fontWeight: "800"}}>6. Can I play matka on Zara777 at any time?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: "#fff"}}>
          Yes, Zara777 operates 24/7, allowing you to access the platform and play whenever it’s convenient for you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{borderRadius: "8px"}}>
        <AccordionSummary
          expandIcon={<ExpandCircleDownIcon style={{color: "#fff"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
          className='p-3'
        >
          <Typography style={{fontWeight: "800"}}>7. What should I do if I encounter an issue with my account?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: "#fff"}}>
          If you have any account issues, please contact our support team through the "Contact Us" page. We’re here to help you resolve any problems.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{borderRadius: "8px"}}>
        <AccordionSummary
          expandIcon={<ExpandCircleDownIcon style={{color: "#fff"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
          className='p-3'
        >
          <Typography style={{fontWeight: "800"}}>8. Is there a minimum or maximum limit for deposits and withdrawals?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: "#fff"}}>
          Yes, Zara777 may have specific limits depending on the payment method. Please refer to our payment policy section for detailed information.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
