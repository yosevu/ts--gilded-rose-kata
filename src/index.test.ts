import { GildedRose, Item } from '.'

const itemIndices = {
  ordinaryItem: 0,
}

describe('GildedRose', () => {
  it('decreases the `sellIn` of an ordinary item', () => {
    const gildedRose = new GildedRose([new Item('Ordinary Item', 2, 3)])
    gildedRose.updateQuality()
    expect(gildedRose.items[itemIndices.ordinaryItem].sellIn).toBe(1)
  })

  it('decreases the `quality` of an ordinary item', () => {
    const gildedRose = new GildedRose([new Item('Ordinary Item', 2, 3)])
    gildedRose.updateQuality()
    expect(gildedRose.items[itemIndices.ordinaryItem].quality).toBe(2)
  })
})
