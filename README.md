# Network Configurator Tool

## Overview

The Network Configurator Tool is designed to simplify the process of generating network device configurations, specifically targeting Cisco switches. This tool is ideal for hobbyists, small to medium-sized businesses, and anyone looking to streamline their network setup. It provides a user-friendly web interface to select predefined configuration options, including VLAN setup, IP addressing, and more, ultimately generating a ready-to-apply configuration file.

## Features

- **Class-Based Network Selection**: Choose between Class A, B, or C networks based on the size and requirements of your network.
- **VLAN Configuration Options**: Easily configure VLANs with predefined options for subnet sizes (e.g., 4 VLANs with /24, 8 VLANs with /23).
- **Advanced Network Settings**: Optional settings for routing protocols, DHCP, DNS, NTP server addresses, and security settings like ACLs and port security.
- **Configuration File Generation**: Automatically generates a configuration file based on user inputs, ready for download and application to your device.
- **Step-by-Step Guides**: Provides comprehensive instructions on how to apply the generated configuration to your network device, including methods like TFTP and USB.
- **Feedback and Expansion**: Users can provide feedback and request additional features or device support, enhancing the tool's capabilities and usability.

## Getting Started

### Prerequisites

- A modern web browser.
- Access to the network device(s) for which you are generating a configuration.
- Basic understanding of network concepts and the specific requirements for your network setup.

### Usage

1. **Navigate to the Tool**: Open the tool in your web browser.
2. **Select Network Class**: Choose the appropriate network class (A, B, or C) and specify the starting IP range.
3. **Configure VLANs**: Select from the predefined VLAN configuration options or customize your VLAN settings.
4. **Optional Settings**: Configure advanced settings if needed.
5. **Generate Configuration**: Review your settings and generate the configuration file.
6. **Download and Apply**: Download the generated configuration file and follow the provided instructions to apply it to your device.

## Applying the Configuration

Detailed instructions will be provided with the generated configuration file, including:

- Preparing your network device for configuration.
- Transferring the configuration file to your device (e.g., via TFTP, USB).
- Applying the configuration and verifying its success.
- Troubleshooting common issues.

## License

The Network Configurator Tool is open source and licensed under [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the license terms.
