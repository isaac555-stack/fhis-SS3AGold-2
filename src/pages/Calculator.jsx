import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  Alert,
} from "@mui/material";

export default function Calculator() {
  const [studentName, setStudentName] = useState("");
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [terms, setTerms] = useState("");
  const [schedule, setSchedule] = useState([]);
  const [error, setError] = useState("");

  const formatCurrency = (num) =>
    "₦" + Number(num).toLocaleString(undefined, { minimumFractionDigits: 2 });

  const calculateAmortization = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 3; // quarterly?
    const n = parseInt(terms);

    if (!studentName.trim()) {
      setError("Please enter the student name");
      return;
    }

    if (!P || !r || !n || P < 0 || r < 0 || n < 1) {
      setError("Please enter valid positive numbers for fee, rate, and terms");
      return;
    }

    setError("");

    const payment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    let balance = P;
    const newSchedule = [];

    for (let i = 1; i <= n; i++) {
      const interest = balance * r;
      const principalPaid = payment - interest;
      balance -= principalPaid;

      newSchedule.push({
        term: i,
        payment,
        principal: principalPaid,
        interest,
        balance: balance > 0 ? balance : 0,
      });
    }

    setSchedule(newSchedule);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        mt: { xs: 15, md: 15 },
        mb: { xs: 10, md: 10 },
      }}
    >
      <Paper elevation={3} sx={{ p: 4, borderRadius: 1, width: "100%" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Amortization Calculator
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Student Name"
            fullWidth
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
          <TextField
            label="Total Fee (₦)"
            type="number"
            fullWidth
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
          <TextField
            label="Interest Rate (%)"
            type="number"
            fullWidth
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          <TextField
            label="Number of Terms"
            fullWidth
            type="number"
            value={terms}
            onChange={(e) => setTerms(e.target.value)}
          />
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3, mb: 3 }}
          onClick={calculateAmortization}
        >
          Calculate
        </Button>

        {schedule.length > 0 && (
          <>
            <Typography variant="h6" align="center" sx={{ mb: 2 }}>
              Schedule for: <b>{studentName}</b>
            </Typography>

            {/* ✅ Scrollable Table Container */}
            <Box sx={{ width: "100%", overflowX: "auto" }}>
              <Paper elevation={2} sx={{ mb: 2 }}>
                <Table
                  sx={{
                    minWidth: 600,
                    borderRadius: 0,
                    "& th": { backgroundColor: "#1565c0", color: "#fff" },
                  }}
                >
                  <TableHead>
                    <TableRow>
                      {[
                        "Term",
                        "Payment",
                        "Principal",
                        "Interest",
                        "Balance",
                      ].map((head) => (
                        <TableCell key={head} align="center">
                          {head}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {schedule.map((row, idx) => (
                      <TableRow
                        key={row.term}
                        sx={{
                          backgroundColor: idx % 2 === 0 ? "#f5f5f5" : "#fff",
                        }}
                      >
                        <TableCell align="center">{row.term}</TableCell>
                        <TableCell align="center">
                          {formatCurrency(row.payment)}
                        </TableCell>
                        <TableCell align="center">
                          {formatCurrency(row.principal)}
                        </TableCell>
                        <TableCell align="center">
                          {formatCurrency(row.interest)}
                        </TableCell>
                        <TableCell align="center">
                          {formatCurrency(row.balance)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
}
