package com.prescripto.backend.controller;

import com.prescripto.backend.dto.RescheduleRequest;
import com.prescripto.backend.model.Appointment;
import com.prescripto.backend.model.EStatus;
import com.prescripto.backend.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/admin")
// This entire controller is now protected. Only admins can access it.
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    @Autowired
    AppointmentRepository appointmentRepository;

    // 1. GET ALL APPOINTMENTS
    @GetMapping("/appointments")
    public ResponseEntity<List<Appointment>> getAllAppointments() {
        // Find all appointments and return them
        List<Appointment> appointments = appointmentRepository.findAll();
        return ResponseEntity.ok(appointments);
    }

    // 2. APPROVE AN APPOINTMENT
    @PatchMapping("/appointments/{id}/approve")
    public ResponseEntity<?> approveAppointment(@PathVariable Long id) {
        // Find the appointment by its ID
        Optional<Appointment> appointmentOptional = appointmentRepository.findById(id);

        if (appointmentOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("Error: Appointment not found.");
        }

        // Update the status to APPROVED
        Appointment appointment = appointmentOptional.get();
        appointment.setStatus(EStatus.APPROVED);
        appointmentRepository.save(appointment);

        return ResponseEntity.ok("Appointment Approved.");
    }

    // 3. REJECT AN APPOINTMENT
    @PatchMapping("/appointments/{id}/reject")
    public ResponseEntity<?> rejectAppointment(@PathVariable Long id) {//
        Optional<Appointment> appointmentOptional = appointmentRepository.findById(id);

        if (appointmentOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("Error: Appointment not found.");
        }

        // Update the status to REJECTED
        Appointment appointment = appointmentOptional.get();
        appointment.setStatus(EStatus.REJECTED);
        appointmentRepository.save(appointment);

        return ResponseEntity.ok("Appointment Rejected.");
    }

    // 4. RESCHEDULE AN APPOINTMENT
    @PatchMapping("/appointments/{id}/reschedule")
    public ResponseEntity<?> rescheduleAppointment(@PathVariable Long id, @RequestBody RescheduleRequest rescheduleRequest) {
        Optional<Appointment> appointmentOptional = appointmentRepository.findById(id);

        if (appointmentOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("Error: Appointment not found.");
        }

        // Update the date and time, and set status to APPROVED
        Appointment appointment = appointmentOptional.get();
        appointment.setAppointmentDate(rescheduleRequest.getNewDate());
        appointment.setAppointmentTime(rescheduleRequest.getNewTime());
        appointment.setStatus(EStatus.APPROVED); // Rescheduling implies approval
        appointmentRepository.save(appointment);

        return ResponseEntity.ok("Appointment Rescheduled.");
    }
}
