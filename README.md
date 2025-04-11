# eq-thj-macros
A collection of predefined macros intended specifically for The Hero's Journey variant of Everquest

# Installation

## Option 1: Predefined Macros directly in your character's ini file

### (1) Locate your character's .ini file

It will be in the same location as `heroesjourneyeq.exe` and in the format of `YourCharacterName_thj.ini`.

For example if you installed THJ at `C:\THJ\heroesjourneyeq.exe` and your character's name is `TacoBell`, then your macro file would be at `C:\THJ\TacoBell_thj.ini`.

### (2) Open your character's .ini file

Right-click on it, and select Edit. This will generally bring it up in Notepad.

### (3) Find the Social section of your character's ini file

You are looking for `[Socials]` within that file, in which under it will be macros for anything you have defined.

For example:

```ini
[Socials]
Page10Button1Name=LOOT
Page10Button1Color=0
Page10Button1Line1=/loot
Page10Button1Line2=/notify LootWnd LW_LootAllButton leftmouseup
Page10Button1Line3=/notify ConfirmationDialogBox CD_Yes_Button leftmouseup
```

### (4) Paste in the following text, assuming you are not using Social Page 10

I predefined the macros on page 10, assuming that very few people would already have macros defined here.

You paste in the following text on new line under `[Socials]`:

```ini
Page10Button1Name=LOOT
Page10Button1Color=0
Page10Button1Line1=/loot
Page10Button1Line2=/notify LootWnd LW_LootAllButton leftmouseup
Page10Button1Line3=/notify ConfirmationDialogBox CD_Yes_Button leftmouseup

Page10Button2Name=SELL
Page10Button2Color=0
Page10Button2Line1=/notify MerchantWND MW_Sell_Button leftmouseup
Page10Button2Line2=/notify QuantityWnd QTYW_Accept_Button leftmouseup

Page10Button3Name=BANK
Page10Button3Color=0
Page10Button3Line1=/hotbutton Autobank /notify BigBankWnd AutoButton leftmouseup

Page10Button4Name=TRDSKIL
Page10Button4Color=0
Page10Button4Line1=/notify TradeskillWnd CombineButton leftmouseup
Page10Button4Line2=/pause 1, /autoinv

Page10Button5Name=DSTRY
Page10Button5Color=0
Page10Button5Line1=/notify IW_InvPage IW_Destroy leftmouseup
Page10Button5Line2=/notify ConfirmationDialogBox CD_Yes_Button leftmouseup

Page10Button6Name=TURNIN
Page10Button6Color=0
Page10Button6Line1=/itemnotify in pack1 1 leftmouseup
Page10Button6Line2=/notify GiveWnd GVW_Give_Button leftmouseup

Page10Button7Name=PARCEL
Page10Button7Color=0
Page10Button7Line1=/notify MerchantWnd MW_MerchantSubwindows tabselect 2
Page10Button7Line2=/notify MerchantWnd MW_ItemlistMail listselect 1
Page10Button7Line3=/notify MerchantWnd MW_Retrieve_Button leftmouseup

Page10Button8Name=TRIB
Page10Button8Color=0
Page10Button8Line1=/notify TributeMasterWnd TMW_DonateButton leftmouseup

Page10Button9Name=TRADER
Page10Button9Color=0
Page10Button9Line1=/hotbutton Set /notify BazaarWnd BZW_Clear_Button leftmouseup
Page10Button9Line2=/notify BazaarWnd BZW_Money0 leftmouseup
Page10Button9Line3=/notify BazaarWnd BZW_SetPrice_Button leftmouseup

```

### (5) If you are already running EQ, you will need to exit and relaunch it

The changes to your ini file will be detected you launch EQ from heroesjourneyeq.exe

## Option 2: Manually

Follow the instruction on https://wiki.heroesjourneyemu.com/en/getting-started/macros to create each macro inside of EQ one at a time.

# How does this all work?

Inside your hot button bar you right-click in a spot -> select **Social** -> select Page 10 -> select the individual macro to put there.



## LOOT

This will loot all the items from the current nearest corpse.

Prerequisites

- ALT+O -> General settings -> Disable Loot All Confirmation
- ALT+O -> Key ->  Target -> Cycle through nearest corpse -> This this to whatever number applies to where you put this macro in your hot button bar

Content

```
/loot
/notify LootWnd LW_LootAllButton leftmouseup
/notify ConfirmationDialogBox CD_Yes_Button leftmouseup
```



## SELL

When you are in the selling window for a merchant, this macro will sell the current item or stack of current items.

```
/notify MerchantWND MW_Sell_Button leftmouseup
/notify QuantityWnd QTYW_Accept_Button leftmouseup
```



## BANK

Not sure, haven't tried this.

```
/hotbutton Autobank /notify BigBankWnd AutoButton leftmouseup
```



## TRDSKIL

Not sure, haven't tried this.

```
/notify TradeskillWnd CombineButton leftmouseup
/pause 1, /autoinv
```



## DSTRY

Will destroy the current item you have picked up and have on your cursor.

Prerequisites

- You must have your inventory window open

```
/notify IW_InvPage IW_Destroy leftmouseup
/notify ConfirmationDialogBox CD_Yes_Button leftmouseup
```



## TURNIN

Not sure, haven't tried this.

Prerequisites

- Rebind "Use centerscreen" to **CTRL+Z**.

```
/itemnotify in pack1 1 leftmouseup
/notify GiveWnd GVW_Give_Button leftmouseup
```



## PARCEL

Will accept all items from the parcel merchant .

Prerequisites

- Must be in the Parcel merchant window

```
/notify MerchantWnd MW_MerchantSubwindows tabselect 2
/notify MerchantWnd MW_ItemlistMail listselect 1
/notify MerchantWnd MW_Retrieve_Button leftmouseup
```



## TRIB

Will donate the current item to the tribute person

```
/notify TributeMasterWnd TMW_DonateButton leftmouseup
```



## TRADER

Hotkey "Set" to 1 and "Save" to 2 for efficient pricing.

```
/hotbutton Set /notify BazaarWnd BZW_Clear_Button leftmouseup
/notify BazaarWnd BZW_Money0 leftmouseup
/notify BazaarWnd BZW_SetPrice_Button leftmouseup
```

