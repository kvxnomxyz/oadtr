# How to prepare a [DTU] issue

## What makes an issue count
The site lists an issue only if its body has BOTH **uploaded attachments**:
1. a file named exactly `device.json`
2. a file named `[name].md` (brief description; the file name becomes the device name, e.g. `Samsung-Galaxy-S25-Ultra.md`)

Not counted: the issue title, typed description text, pasted links to files elsewhere.
- Issue **open** -> Pending devices
- Issue **closed** -> Devices

Easiest: use `/create-device`, download both files, open the issue, drag them into "Attached files".

## 1. Get exact values
```
adb shell getprop ro.product.model
adb shell getprop ro.product.device
adb shell getprop ro.board.platform
fastboot getvar product
```
## 2. device.json
```
{
  "brand": "Samsung",
  "name": "Galaxy S25 Ultra",
  "model": "SM-S938B",
  "codename": "pa3q",
  "soc": "Snapdragon 8 Elite",
  "action": "Add new device",
  "bootloader": "Unlockable",
  "usb": "04e8:6860",
  "sources": ["https://example.com/spec"],
  "notes": ""
}
```
Codename lowercase or `unknown`. At least one source URL. Never include serials or IMEI.

## 3. [name].md
Short description: what the device is, variants, quirks. Use hyphens in the file name (GitHub turns spaces into dots).

## 4. Rules
One device per issue. Search first. Unverified values: `unknown`. Moderators close the issue to approve it.
