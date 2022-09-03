@extends('layouts.app')

@section('content')
    <div>
        <h3>create todo</h3>
        <form action="/todos/update/{{$todo->id}}" method="POST" class='form-group'>
            @csrf
            <input type="text" class='form-control' name="title" value={{$todo->title}} placeholder="title">
            <textarea type="text" rows=5 class='form-control' name="description"
                value={{$todo->description}} placeholder="description">
                {{$todo->description}}

            </textarea>
            <input type="submit" class='form-control btn btn-block btn-primary' value="update">
        </form>
    </div>
@endsection
