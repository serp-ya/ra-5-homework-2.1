'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'All'
    }
  }

  onSelectFilter = (filter) => {
    this.setState({selectedCategory: filter});
  };

  render() {
    let filteredProjects = this.props.projects;

    if (this.state.selectedCategory !== 'All') {
      filteredProjects = filteredProjects.filter(element =>
        element.category === this.state.selectedCategory
      );
    }

    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.selectedCategory}
          onSelectFilter={this.onSelectFilter} />
        <Portfolio projects={filteredProjects} />
      </div>
    );
  }
}