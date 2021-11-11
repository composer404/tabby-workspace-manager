<h1>Tabby Workspace Manager</h1>

<p  style="font-size: 16px;">
    A <a href="https://tabby.sh/">Tabby</a> plugin that allows you to create multiple workspace profiles. Each profile has its own .yaml config in which you can customize the workspace. Additionally, it is possible to select a workspace profile that will be run at the terminal startup and setting hotkeys for first five profiles.
</p>

<img src="https://raw.githubusercontent.com/composer404/tabby-workspace-manager/master/docs/tabby-workspace-manager.jpg" style="border-radius: 10px">
<br>

<p style="font-size: 16px;">
    The config contains a list of tabs and its attributes:
    <i><b>
    <ul style="font-size: 16px">
        <li> Title </li>
        <li> Color </li>
        <li> Profile (by default selected the first avaliable one) </li>
        <li> List of commands after tab is open </li>
    </ul>
    </i></b>

<span style="font-size: 13px;">\*all the attributes are optional</span>

</p>

<br>

<h2>Example workspace config</h2>

```
    - title: Example Title 1
      color: '#03fccf'
      profile: 0
      commands:
         - ls
         - cd ..
    - title: Example Title 2
      color: '#fc036b'
      profile: 1
    - title: Example Title 3
      color: '#302a57'
```

</p>
