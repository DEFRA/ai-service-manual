/**
 * @module Radar
 *
 * Module intended to be ran on the client-side to enable progressive
 * enhancements for the tech-radar SVG, while allowing display of the
 * radar even if JavaScript is disabled.
 *
 * Enhancements include:
 * - Highlighting blip upon hovering on legend item
 * - Highlighting legend item upon hovering on blip
 */

/**
 * Loads the SVG document from the object container
 *
 * @returns {Promise<Document>} The loaded SVG document
 * @throws {Error} If SVG container is not found or fails to load
 */
function loadSvg() {
  console.log('Loading radar SVG document')

  const radarContainer = document.querySelector('#radar-object')

  if (!radarContainer) {
    throw new Error('SVG object container not found')
  }

  return new Promise((resolve, reject) => {
    const handleLoad = () => {
      const svgDoc = radarContainer.contentDocument

      if (svgDoc) {
        resolve(svgDoc)
      } else {
        reject(new Error('Failed to access SVG document'))
      }
    }

    // Handle Chrome behavior, which sets a object document to
    // 'about:blank' before while loading the SVG.
    // Check whether the root element is actually an SVG tag.
    const rootElement = radarContainer.contentDocument?.documentElement

    if (rootElement?.tagName === 'svg') {
      handleLoad()
    } else {
      radarContainer.addEventListener('load', handleLoad, { once: true })
    }
  })
}

/**
 * Find pair of blip and legend elements by ID
 *
 * Each blip / legend pair are linked by their IDs, e.g. blip1 and legendItem1
 *
 * @param {Document} svgDoc - The SVG document
 * @param {string} id - The ID to search for
 * @returns {Object} Object containing blip and legend elements
 */
function findRadarEntryPair(svgDoc, id) {
  return {
    blip: svgDoc.querySelector(`#blip${id} circle`),
    legend: svgDoc.querySelector(`#legendItem${id}`)
  }
}

/**
 * Extracts the ID from an element's ID attribute by removing a prefix
 *
 * @param {Element} element - The element to extract ID from
 * @param {string} prefix - The prefix to remove
 * @returns {string|null} The extracted ID or null if not found
 */
function extractIdFromElement(element, prefix) {
  const fullId = element?.getAttribute('id')
  return fullId?.replace(prefix, '') || null
}

/**
 * Applies hover styling to blip / legend pair by ID
 * @param {Document} svgDoc - The SVG document
 * @param {string} id - The ID of the elements to style
 */
function applyHoverStyling(svgDoc, id) {
  if (!id) {
    throw new Error('A valid ID must be provided to apply hover styling')
  }

  const { blip, legend } = findRadarEntryPair(svgDoc, id)

  if (blip) {
    const currentFill = blip.getAttribute('fill')
    if (currentFill) {
      blip.setAttribute('data-original-fill', currentFill)
    }
    blip.setAttribute('fill', 'black')
  }

  if (legend) {
    legend.setAttribute('fill', 'red')
  }
}

/**
 * Removes hover styling from blip / legend pair by ID
 * @param {Document} svgDoc - The SVG document
 * @param {string} id - The ID of the elements to unstyle
 */
function removeHoverStyling(svgDoc, id) {
  if (!id) {
    throw new Error('A valid ID must be provided to remove hover styling')
  }

  const { blip, legend } = findRadarEntryPair(svgDoc, id)

  if (blip) {
    const originalFill = blip.getAttribute('data-original-fill')
    blip.removeAttribute('fill')

    if (originalFill) {
      blip.setAttribute('fill', originalFill)
    }

    blip.removeAttribute('data-original-fill')
  }

  if (legend) {
    legend.removeAttribute('fill')
  }
}

/**
 * Handles mouse events for blip elements
 * @param {Document} svgDoc - The SVG document
 * @param {Event} event - The mouse event (mouseover or mouseout)
 */
function handleBlipMouseEvent(svgDoc, event) {
  const target = event.target.closest('[id]')
  const id = extractIdFromElement(target, 'blip')

  if (event.type === 'mouseover') {
    return applyHoverStyling(svgDoc, id)
  }

  return removeHoverStyling(svgDoc, id)
}

/**
 * Handles mouse events for legend item elements
 * @param {Document} svgDoc - The SVG document
 * @param {Event} event - The mouse event (mouseover or mouseout)
 */
function handleLegendMouseEvent(svgDoc, event) {
  const target = event.target.closest('[id]')
  const id = extractIdFromElement(target, 'legendItem')

  if (event.type === 'mouseover') {
    return applyHoverStyling(svgDoc, id)
  }

  return removeHoverStyling(svgDoc, id)
}

/**
 * Applies progressive enhancements to the tech-radar SVG document.
 *
 * This includes:
 * - Highlighting blip upon hovering on legend item
 * - Highlighting legend item upon hovering on blip
 */
function applyRadarEnhancements() {
  loadSvg()
    .then((svgDoc) => {
      svgDoc.querySelectorAll('.blip').forEach((blip) => {
        blip.addEventListener('mouseover', (event) =>
          handleBlipMouseEvent(svgDoc, event)
        )
        blip.addEventListener('mouseout', (event) =>
          handleBlipMouseEvent(svgDoc, event)
        )
      })

      svgDoc.querySelectorAll('.legendItem').forEach((legendItem) => {
        legendItem.addEventListener('mouseover', (event) =>
          handleLegendMouseEvent(svgDoc, event)
        )
        legendItem.addEventListener('mouseout', (event) =>
          handleLegendMouseEvent(svgDoc, event)
        )
      })
    })
    .catch((error) => {
      console.error('Failed to initialize radar enhancements:', error)
    })
}

applyRadarEnhancements()
