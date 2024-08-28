# **Starter Project**

## Prerequisite
- Node version >= 17

## Branches
### 1. Vanilla Js
- Use this template if you want to build with Vanilla js.
- Live server extension required to run the code.

### 2. React Js
- Use this template if you want to build with React Js
- Install dependencies using  ```npm install```
- Run dev server using ```npm run dev```

#
### Instructions
- Checkout from any of the Branch (vanilla-js/react) to a new branch named - {{ name-mobile-number }} //Your name and mobile number

##
## Overview

In this task, participants are required to develop a booking management system for a clinic with two doctors. The clinic operates with specific constraints and requires an efficient booking system that maximizes the utilization of available resources (doctors) while ensuring no overbooking occurs.

## Problem Statement

### Clinic and Doctors

**Clinic Capacity**: The clinic has two doctors available to take bookings.
**Operating Hours**: The clinic is open from 10:00 AM to 7:00 PM, with booking slots available in 30-minute intervals.

### Booking Types

1. **Clinic Booking**: A general booking where the patient does not choose a specific doctor but will be assigned to any available doctor.
2. **Doctor Booking**: A booking where the patient selects a specific doctor, and that doctor is reserved for the time slot.

### Booking Conditions

**Slot Availability**: A time slot is available if at least one doctor is free.
**Exclusive Booking**: If one doctor is booked individually and another booking is made for the clinic (or vice versa), the capacity is fully utilized, and no further bookings should be allowed for that time slot.
**Booking Limit**: The clinic cannot accept more bookings than the number of available doctors.

## Objectives

Participants are tasked with building a system that:

1. **Maximizes Resource Utilization**: Ensure that the clinic's resources (doctors) are used as effectively as possible by filling up available slots while avoiding overbooking.
2. **Dynamic Slot Management**: The system should dynamically manage slot availability based on existing bookings.
3. **Prevent Overbooking**: The system should ensure that no slot is shown as available if the clinic's capacity has been reached for that slot.

## Requirements

### Functional Requirements

**Slot Display**: Show available booking slots in 30-minute intervals between 10:00 AM and 7:00 PM.
**Booking Logic**:
  - Allow clinic bookings that do not specify a doctor.
  - Allow individual doctor bookings.
  - Prevent overbooking by ensuring that a slot is not available if both doctors are booked (either individually or through a combination of bookings).
**Real-time Updates**: Update the availability of slots in real-time based on the current bookings.

### Non-Functional Requirements

- **User Interface**: Provide a clear and intuitive interface for booking slots.
- **Scalability**: The system should handle an increasing number of bookings efficiently.
- **Reliability**: Ensure that the system is robust and can handle edge cases like simultaneous booking attempts.

