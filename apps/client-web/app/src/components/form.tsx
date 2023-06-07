'use client';
import { TextField, FormLabel, Button } from '@mui/material';

export function OptimizationForm() {
  return (
    <>
      <div style={{ backgroundColor: '#1976d2', minHeight: '64px' }} />
      <div
        className="form"
        style={{
          minHeight: '100%',
          maxWidth: '300px',
          padding: '0px 2%',
          margin: '6% 0px',
        }}
      >
        <span style={{ padding: '15%', fontSize: '20px' }}>
          Optimization Form
        </span>
        <form
          style={{
            minHeight: '40%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <TextField
            id="targetYear"
            label="Target Year"
            style={{ backgroundColor: 'white' }}
          />
          <TextField
            id="targetCarbonEmissionThreshold"
            label="Target Carbon Emission Threshold"
            style={{ backgroundColor: 'white' }}
          />
          <TextField
            id="costOfCapital"
            label="Cost of Capital"
            style={{ backgroundColor: 'white' }}
          />
          <TextField
            id="annualSpendingLimit"
            label="Annual Spending Limit (CAPEX + OPEX"
            style={{ backgroundColor: 'white' }}
          />
          <Button
            type="submit"
            variant="contained"
            style={{ marginTop: '5%', marginBottom: '5%' }}
          >
            Optimize
          </Button>
        </form>
      </div>
    </>
  );
}
