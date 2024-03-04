import React from 'react'
import Provincia from './Provincia'

const Mendoza: React.FC<{ province: object }> = ({ province }) => {
  return (
    <Provincia
    owner={province.owner}
    id={province.name}
    d="M39.475 182.305l3.151 9.674 1.822 3.87-.331 3.343 3.813 2.461 2.653 4.397 7.46 5.1 14.923 14.95.662 4.572 1.66 3.692 5.968 3.87 6.3 1.583 11.935-.704 5.64 7.035 2.816 2.463 11.274-.351 4.476 2.99 4.808-.351 6.796 3.516 3.151 1.759.828-.879-5.14-73.868-2.984-5.276-.664-9.848 4.807.352 62.837-2.463 1.66-.879 2.485-6.682 1.823-33.767-.33-9.674-1.162-2.288-1.16-11.255-7.628-13.544-2.653-13.19-2.486-3.342-.664-3.87 3.48-8.619.332-8.618-8.455-4.924-5.969-6.86-.496-6.858-6.964-17.412-2.32-10.024-1.823-24.797-3.98-6.86-.498-5.1-5.47-7.21-1.492.705-12.6-1.233-10.446-4.924.167-4.222-2.653-2.814-2.156 2.287-8.952.879-12.104 10.552-3.814 4.044-12.599-.527-.83-10.025c-2.673-1.755-4.865-3.39-13.097-6.507-2.357 1.01-4.708 2.075-6.632 7.21-6.743 1.274-8.384 3.842-12.435 9.145-5.012 5.981-1.043 13.106-5.8 17.412-5.841-3.805-13.277 4.071-16.748-.878-1.876 2.8-1.692 4.915 2.322 10.728 5.24 6.69 3.778 14.17 5.47 21.28.785 3.166.985 6.332 2.984 9.497 1.982.418 3.684 1.136 7.793-.703 6.62 2.565 2.938 9.734 1.657 15.828l.166 8.092-.497 5.802 1.823 8.091c.569 3.992 1.006 8.41 1.99 11.08l-2.818 1.76-4.476 7.736 1.325 6.333-3.648 4.397s-2.817 3.87-2.653 4.573c.167.703-1.823 4.397-1.823 4.397s-3.812 1.758-3.98 2.461c-.165.705-.993 3.517-.993 3.517l2.817 3.165.664 2.815-1.161 4.572-.497 6.683-3.483 3.692-3.646 4.926-1.327 3.693 5.305 5.626v3.52l3.151 6.33.497 5.453 3.315 9.672.497 6.86-2.155 7.914-2.811 2.992z" />
  )
}

export default Mendoza