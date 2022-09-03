@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}
                    <div class="border p-2">
                        <form action="/todos/create" method="POST" class='form-group'>
                            @csrf
                            <input type="text" class='form-control' name="title" placeholder="title">
                            <textarea type="text" rows=5 class='form-control' name="description"
                                 placeholder="description">


                            </textarea>
                            <input type="submit" class='form-control btn btn-block btn-primary' value="create">
                        </form>
                    </div>


            </div>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">title</th>
                    <th scope="col">description</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                    @foreach($todos as $todo)
                        <tr>
                            <th scope="row">{{$todo->id}}</th>
                            <td>{{$todo->title}}</td>
                            <td>{{$todo->description}}</td>
                            <td>
                                <span data-id="{{$todo->id}}">

                                    <a href="/todos/delete/{{$todo->id}}" class=" btn-danger">
                                        <i class="fas fa-trash"></i>
                                    </a>

                                    <a href="/todos/edit/{{$todo->id}}" class=" btn-primary">
                                        <i class="fas fa-edit"></i>

                                    </a>
                                </span>



                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            </div>
        </div>
    </div>
</div>
@endsection
