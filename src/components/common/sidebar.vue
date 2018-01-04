<template>
      <v-list dense>
        <template v-for='(item, i) in items'>
          <v-layout
            row
            v-if='item.heading'
            align-center
            :key='i'
          >
            <v-flex xs6>
              <v-subheader v-if='item.heading'>
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class='text-xs-center'>
              <a href='#!' class='body-2 black--text'>EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if='item.children' v-model='item.model' no-action>
            <v-list-tile slot='item' @click=''>
              <v-list-tile-action>
                <v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for='(child, i) in item.children'
              :key='i'
              @click=''
            >
              <v-list-tile-action v-if='child.icon'>
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click=''>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
</template>

<script>
export default {
  name: 'appSidebar',
  data: () => ({
    items: [
      { icon: 'favorite_border', text: 'Favorites' },
      { icon: 'history', text: 'History' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Labels',
        model: true,
        children: [{ icon: 'add', text: 'Create label' }]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'More',
        model: false,
        children: [
          { text: 'Import' },
          { text: 'Export' }
        ]
      },
      { icon: 'settings', text: 'Settings' },
      { icon: 'help', text: 'Help' },
      { icon: 'phonelink', text: 'App downloads' }
    ]
  })
}
</script>