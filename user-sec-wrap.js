let basicSecurity = function( fn ) {
  return function() {
    if ( this.userId ) {
      return fn.apply( this, arguments );
    } else {
      throw new Meteor.Error( 'You must be logged in' );
    }
  };
};

Meteor.wrapSecurity = basicSecurity;
