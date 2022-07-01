<h1>Tabby Workspace Manager</h1>

<p>
    A <a href="https://tabby.sh/">Tabby</a> plugin that allows you to create multiple workspace profiles. Each profile has its own .yaml config in which you can customize the workspace. Additionally, it is possible to select a workspace profile that will be run at the terminal startup and setting hotkeys for first five profiles.
</p>

## Table of contents

-   [Getting Started](#getting-started)
-   [General](#general)
-   [Example workspace config](#example-workspace-config)

## Getting Started

`Last release of a plugin is available directly in Tabby's plugin tab`

## General

<p>
The plugin adds a new tab in Tabby's settings. It is possible to add, delete and edit workspace profiles here. Additionally, you can add a default profile and enable it on the terminal startup (upper right corner). In the hotkeys tab, it is possible to set keyboard shortcuts for the first five workspace profiles.
</p>

<img src="https://raw.githubusercontent.com/composer404/tabby-workspace-manager/master/docs/tabby-workspace-manager.jpg" style="border-radius: 10px">

<p>
    The config contains a list of tabs and its attributes:
    <i>
    <ul>
        <li> Title </li>
        <li> Color </li>
        <li> Profile (by default selected the first available one) </li>
        <li> List of commands after tab is open </li>
    </ul>
    </i>
    <span style="font-size: 12px;">*all the attributes are optional</span>
</p>

<br>

## Example workspace config

```
    - title: Example Title 1
      color: '#03fccf'
      profile: CMD (clink)
      commands:
         - ls
         - cd ..
    - title: Example Title 2
      color: '#fc036b'
      profile: 1
    - title: Example Title 3
      color: '#302a57'
```
