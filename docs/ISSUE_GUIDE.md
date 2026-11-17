# How to prepare a [DTU] issue

Easiest: use `/create-device` on the site, it builds a valid issue for you. Manual steps below.

## 1. Get exact values from the device
```
adb shell getprop ro.product.model
adb shell getprop ro.product.device
adb shell getprop ro.board.platform
adb shell getprop ro.product.manufacturer
fastboot getvar product
lsusb | grep -i -E "google|xiaomi|samsung|nothing"
```
- `ro.product.model` -> **Model number(s)**
- `ro.product.device` -> **Codename**
- `ro.board.platform` -> **SoC / platform**

## 2. Field rules
| Field | Rule | Good | Bad |
|---|---|---|---|
| Title | `[DTU] Brand Name (codename)` | `[DTU] Samsung Galaxy S25 Ultra (pa3q)` | `add my phone` |
| Brand | Manufacturer, normal capitalisation | `Xiaomi` | `MI` |
| Marketing name | Name as sold, no model number | `Redmi Note 7` | `Redmi Note 7 SM-xxx` |
| Model number(s) | Exact, comma-separated for variants | `SM-S938B, SM-S938U` | `S938` |
| Codename | Lowercase, no spaces; `unknown` if you can't find it | `lavender` | `Lavender (India)` |
| Sources | At least one URL: official spec page, LineageOS wiki, kernel source, XDA | `https://wiki.lineageos.org/devices/lavender` | `google it` |

## 3. Rules
1. One device (or one variant family) per issue.
2. Search the Devices and Pending tabs first; for an existing device choose **Update existing device**.
3. Never paste serial numbers, IMEI or account info. Only USB vendor:product IDs.
4. Unverified values: write `unknown` and explain in Notes. Never guess.

## 4. Lifecycle
- Open `[DTU]` issue = **Pending devices**.
- Moderator verifies, adds to `devices/index.json` (optional) and **closes as completed** = **Devices**.
- Closed as *not planned* = rejected, not listed.
