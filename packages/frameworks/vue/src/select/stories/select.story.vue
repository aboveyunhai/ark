<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '../'
import { ChevronDownIcon } from './icons'
import './select.css'

const basicItems = ref(['React', 'Solid', 'Vue'])
const advancedItems = ref([
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte', disabled: true },
])

const value = ref(['vue'])
</script>

<template>
  <Story title="Select">
    <Variant title="Basic">
      <Select.Root :items="basicItems">
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Framework" />
            <Select.Indicator>
              <ChevronDownIcon />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger>Clear</Select.ClearTrigger>
        </Select.Control>
        <Teleport to="body">
          <Select.Positioner>
            <Select.Content>
              <Select.ItemGroup id="framework">
                <Select.ItemGroupLabel htmlFor="framework">Frameworks</Select.ItemGroupLabel>
                <Select.Item v-for="item in basicItems" :key="item" :item="item">
                  <Select.ItemText>{{ item }}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Teleport>
      </Select.Root>
    </Variant>

    <Variant title="Advanced">
      <Select.Root :items="advancedItems">
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Framework" />
            <Select.Indicator>
              <ChevronDownIcon />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger>Clear</Select.ClearTrigger>
        </Select.Control>
        <Teleport to="body">
          <Select.Positioner>
            <Select.Content>
              <Select.ItemGroup id="framework">
                <Select.ItemGroupLabel htmlFor="framework">Frameworks</Select.ItemGroupLabel>
                <Select.Item v-for="item in advancedItems" :key="item.value" :item="item">
                  <Select.ItemText>{{ item.label }}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Teleport>
      </Select.Root>
    </Variant>

    <Variant title="Multiple">
      <Select.Root :items="advancedItems" multiple>
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Framework" />
            <Select.Indicator>
              <ChevronDownIcon />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger>Clear</Select.ClearTrigger>
        </Select.Control>
        <Teleport to="body">
          <Select.Positioner>
            <Select.Content>
              <Select.ItemGroup id="framework">
                <Select.ItemGroupLabel htmlFor="framework">Frameworks</Select.ItemGroupLabel>
                <Select.Item v-for="item in advancedItems" :key="item.value" :item="item">
                  <Select.ItemText>{{ item.label }}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Teleport>
      </Select.Root>
    </Variant>

    <Variant title="Controlled">
      <Select.Root :items="advancedItems" v-model="value">
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Framework" />
            <Select.Indicator>
              <ChevronDownIcon />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger>Clear</Select.ClearTrigger>
        </Select.Control>
        <Teleport to="body">
          <Select.Positioner>
            <Select.Content>
              <Select.ItemGroup id="framework">
                <Select.ItemGroupLabel htmlFor="framework">Frameworks</Select.ItemGroupLabel>
                <Select.Item v-for="item in advancedItems" :key="item.value" :item="item">
                  <Select.ItemText>{{ item.label }}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Teleport>
      </Select.Root>
    </Variant>
  </Story>
</template>
